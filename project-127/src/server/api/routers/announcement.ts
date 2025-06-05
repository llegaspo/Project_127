// server/api/routers/announcement.ts
import { createTRPCRouter, publicProcedure } from '../trpc';
import { z } from 'zod';
import { Prisma, AnnouncementSource } from '@prisma/client';
import {
  AddAnnouncementSchema,
  EditAnnouncementSchema,
  DeleteAnnouncementSchema,
} from '@/utils/schema/announcementSchema';
import { ApiResponse, Severity } from '@/utils/api';
import { TRPCError } from '@trpc/server';

export const announcementRouter = createTRPCRouter({
  // Create an announcement
  create: publicProcedure
    .input(AddAnnouncementSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        await ctx.prisma.announcement.create({
          data: {
            title: input.title,
            description: input.description,
            createdBy: input.createdBy,
            createdAt: new Date(input.createdAt),
            source: AnnouncementSource.CUSTOM,
          },
        });
        return { severity: Severity.SUCCESS, message: 'Announcement created successfully' };
      } catch (e: unknown) {
        console.error('Error in announcement.create:', e);
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
          return { severity: Severity.ERROR, message: e.message };
        }
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Failed to create announcement.',
        });
      }
    }),

  // Fetch one announcement by ID
  fetch: publicProcedure
    .input(z.string().cuid())
    .query(async ({ ctx, input: id }) => {
      try {
        return await ctx.prisma.announcement.findUnique({ where: { id } });
      } catch (e: unknown) {
        console.error('Error in announcement.fetch:', e);
        throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: 'Failed to fetch announcement.' });
      }
    }),

  // Fetch all announcements
  fetchAll: publicProcedure.query(async ({ ctx }) => {
    try {
      return await ctx.prisma.announcement.findMany({
        orderBy: { createdAt: 'desc' },
      });
    } catch (e: unknown) {
      console.error('Error in announcement.fetchAll:', e);
      throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: 'Failed to fetch announcements.' });
    }
  }),

  // Update an announcement
  edit: publicProcedure
    .input(EditAnnouncementSchema)
    .output(ApiResponse)
    .mutation(async ({ ctx, input }) => {
      try {
        const result = await ctx.prisma.announcement.update({
          where: { id: input.id },
          data: {
            title: input.title,
            description: input.description,
            createdBy: input.createdBy,
            createdAt: new Date(input.createdAt),
            source: input.source,
          },
        });
        if (result) {
          return { severity: Severity.SUCCESS, message: 'Updated announcement successfully' };
        }
        return { severity: Severity.ERROR, message: 'Announcement not found or not updated.' };
      } catch (e: unknown) {
        console.error('Error in announcement.edit:', e);
        return { severity: Severity.ERROR, message: 'Error updating announcement.' };
      }
    }),

  // Delete an announcement
  delete: publicProcedure
    .input(DeleteAnnouncementSchema)
    .output(ApiResponse)
    .mutation(async ({ ctx, input }) => {
      try {
        const result = await ctx.prisma.announcement.delete({ where: { id: input.id } });
        if (result) {
          return { severity: Severity.SUCCESS, message: 'Deleted announcement successfully' };
        }
        return { severity: Severity.ERROR, message: 'Announcement not found or not deleted.' };
      } catch (e: unknown) {
        console.error('Error in announcement.delete:', e);
        return { severity: Severity.ERROR, message: 'Error deleting announcement.' };
      }
    }),
});
