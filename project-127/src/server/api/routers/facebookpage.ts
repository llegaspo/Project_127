// server/api/routers/facebookpage.ts
import { createTRPCRouter, publicProcedure } from '../trpc';
import { z } from 'zod';
import { Prisma, PageType } from '@prisma/client';
import {
  AddFacebookPageSchema,
  EditFacebookPageSchema,
  DeleteFacebookPageSchema,
} from '@/utils/schema/fbPageSchema';
import { ApiResponse, Severity } from '@/utils/api';

export const facebookPageRouter = createTRPCRouter({
  // Create a new Facebook Page
  create: publicProcedure
    .input(AddFacebookPageSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        await ctx.prisma.fbPage.create({
          data: {
            pageName: input.pageName,
            url: input.url,
            type: input.type, // e.g. PageType.BUSINESS
          },
        });
        return { severity: Severity.SUCCESS, message: 'Facebook page added successfully' };
      } catch (e: unknown) {
        console.error('Error in facebookPage.create:', e);
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
          return { severity: Severity.ERROR, message: e.message };
        }
        throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: 'Failed to create page.' });
      }
    }),

  // Fetch one Facebook Page
  fetch: publicProcedure
    .input(z.string().cuid())
    .query(async ({ ctx, input: id }) => {
      try {
        return await ctx.prisma.fbPage.findUnique({ where: { id } });
      } catch (e: unknown) {
        console.error('Error in facebookPage.fetch:', e);
        throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: 'Failed to fetch page.' });
      }
    }),

  // Fetch all Facebook Pages
  fetchAll: publicProcedure.query(async ({ ctx }) => {
    try {
      return await ctx.prisma.fbPage.findMany({ orderBy: { pageName: 'asc' } });
    } catch (e: unknown) {
      console.error('Error in facebookPage.fetchAll:', e);
      throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: 'Failed to fetch pages.' });
    }
  }),

  // Update a Facebook Page
  edit: publicProcedure
    .input(EditFacebookPageSchema)
    .output(ApiResponse)
    .mutation(async ({ ctx, input }) => {
      try {
        const result = await ctx.prisma.fbPage.update({
          where: { id: input.id },
          data: {
            pageName: input.pageName,
            url: input.url,
            type: input.type,
          },
        });
        if (result) {
          return { severity: Severity.SUCCESS, message: 'Updated Facebook page successfully' };
        }
        return { severity: Severity.ERROR, message: 'Page not found or not updated.' };
      } catch (e: unknown) {
        console.error('Error in facebookPage.edit:', e);
        return { severity: Severity.ERROR, message: 'Error updating Facebook page' };
      }
    }),

  // Delete a Facebook Page
  delete: publicProcedure
    .input(DeleteFacebookPageSchema)
    .output(ApiResponse)
    .mutation(async ({ ctx, input }) => {
      try {
        const result = await ctx.prisma.fBPage.delete({ where: { id: input.id } });
        if (result) {
          return { severity: Severity.SUCCESS, message: 'Deleted Facebook page successfully' };
        }
        return { severity: Severity.ERROR, message: 'Page not found or not deleted.' };
      } catch (e: unknown) {
        console.error('Error in facebookPage.delete:', e);
        return { severity: Severity.ERROR, message: 'Error deleting Facebook page' };
      }
    }),
});
