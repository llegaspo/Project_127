// server/api/routers/facebookpost.ts
import { createTRPCRouter, publicProcedure } from '../trpc';
import { z } from 'zod';
import { Prisma, StatusType } from '@prisma/client';
import {
  AddFacebookPostSchema,
  EditFacebookPostSchema,
  DeleteFacebookPostSchema,
} from '@/utils/schema/facebookPostSchema';
import { ApiResponse, Severity } from '@/utils/api';
import { TRPCError } from '@trpc/server';

export const facebookPostRouter = createTRPCRouter({
  // Create a new FacebookPost
  create: publicProcedure
    .input(AddFacebookPostSchema)
    .mutation(async ({ ctx, input: {pageName, fbPostID, author, content, url ,createdAt, status} }) => {
      try {
        await ctx.prisma.facebookPost.create({
          data: {
            pageName: pageName,
            fbPostID: fbPostID,
            author: author,
            content: content,
            url: url,
            createdAt: createdAt,
            status: StatusType.PENDING,
          },
        });
        return { severity: Severity.SUCCESS, message: 'Facebook post added successfully' };
      } catch (e: unknown) {
        console.error('Error in facebookPost.create:', e);
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
          return { severity: Severity.ERROR, message: e.message };
        }
        throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: 'Failed to create post.' });
      }
    }),

  // Fetch one FacebookPost by ID
  fetch: publicProcedure
    .input(z.string().cuid())
    .query(async ({ ctx, input: id }) => {
      try {
        return await ctx.prisma.facebookPost.findUnique({ where: { id } });
      } catch (e: unknown) {
        console.error('Error in facebookPost.fetch:', e);
        throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: 'Failed to fetch post.' });
      }
    }),

  // Fetch all FacebookPosts (no filter by userId in this example)
  fetchAll: publicProcedure
    .input(z.object({}).optional())
    .query(async ({ ctx }) => {
      try {
        return await ctx.prisma.facebookPost.findMany({
          orderBy: { createdAt: 'desc' },
        });
      } catch (e: unknown) {
        console.error('Error in facebookPost.fetchAll:', e);
        throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: 'Failed to fetch posts.' });
      }
    }),

  // Update a FacebookPost
  edit: publicProcedure
    .input(EditFacebookPostSchema)
    .output(ApiResponse)
    .mutation(async ({ ctx, input }) => {
      try {
        const result = await ctx.prisma.facebookPost.update({
          where: { id: input.id },
          data: {
            pageName: input.pageName,
            fbPostID: input.fbPostID,
            author: input.author,
            content: input.content,
            url: input.url,
            createdAt: input.createdAt,
            status: input.status,
          },
        });
        if (result) {
          return { severity: Severity.SUCCESS, message: 'Updated facebook post successfully' };
        }
        return { severity: Severity.ERROR, message: 'Post not found or not updated.' };
      } catch (e: unknown) {
        console.error('Error in facebookPost.edit:', e);
        return { severity: Severity.ERROR, message: 'Error updating facebook post' };
      }
    }),

  // Delete a FacebookPost
  delete: publicProcedure
    .input(DeleteFacebookPostSchema)
    .output(ApiResponse)
    .mutation(async ({ ctx, input }) => {
      try {
        const result = await ctx.prisma.facebookPost.delete({ where: { id: input.id } });
        if (result) {
          return { severity: Severity.SUCCESS, message: 'Deleted facebook post successfully' };
        }
        return { severity: Severity.ERROR, message: 'Post not found or not deleted.' };
      } catch (e: unknown) {
        console.error('Error in facebookPost.delete:', e);
        return { severity: Severity.ERROR, message: 'Error deleting facebook post' };
      }
    }),
});
