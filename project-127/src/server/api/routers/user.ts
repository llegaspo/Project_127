// server/api/routers/user.ts
import { createTRPCRouter, publicProcedure } from '../trpc';
import { z } from 'zod';
import { Prisma } from '@prisma/client';
import { UserSchema, RegisterSchema } from '@/utils/schema/userSchema';
import { ApiResponse, Severity } from '@/utils/api';
import { hash } from '@node-rs/argon2';
import { TRPCError } from '@trpc/server';

export const userRouter = createTRPCRouter({
  // Create/Register a user
  registerUser: publicProcedure
    .input(RegisterSchema)
    .output(
      z.object({
        severity: z.nativeEnum(Severity),
        message: z.string(),
        // You may remove token entirely if you don't want JWT; but for now, omit token in the response
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        const { confirmEmail, confirmPassword, ...createData } = input;

        // If you wish to still hash the password before saving:
        createData.password = await hash(createData.password);

        const result = await ctx.prisma.user.create({
          data: createData,
        });

        return {
          severity: Severity.SUCCESS,
          message: 'User registered successfully.',
        };
      } catch (err: unknown) {
        console.error('Error in registerUser:', err);
        return {
          severity: Severity.ERROR,
          message: 'Registration failed.',
        };
      }
    }),

  // Create user (admin‐like route—but now public! everyone can call it)
  createUser: publicProcedure
    .input(UserSchema)
    .output(ApiResponse)
    .mutation(async ({ ctx, input }) => {
      try {
        // Optionally hash a temp password if you require a default
        const defaultHash = await hash(process.env.TEMP_PASS || 'changeme');
        input.password = defaultHash;

        const result = await ctx.prisma.user.create({
          data: input,
        });
        return {
          severity: Severity.SUCCESS,
          message: 'User created successfully',
        };
      } catch (e: unknown) {
        console.error('Error in createUser:', e);
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
          return { severity: Severity.ERROR, message: e.message };
        }
        return { severity: Severity.ERROR, message: 'Unknown error occurred.' };
      }
    }),

  // Edit user by ID
  editUser: publicProcedure
    .input(UserSchema.extend({ id: z.string().cuid() }))
    .output(ApiResponse)
    .mutation(async ({ ctx, input }) => {
      try {
        const { id, ...dataToUpdate } = input;
        await ctx.prisma.user.update({
          where: { id },
          data: dataToUpdate,
        });
        return {
          severity: Severity.SUCCESS,
          message: 'User updated successfully',
        };
      } catch (e: unknown) {
        console.error('Error in editUser:', e);
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
          return { severity: Severity.ERROR, message: e.message };
        }
        return { severity: Severity.ERROR, message: 'Unknown error occurred.' };
      }
    }),

  // Delete user by ID
  deleteUser: publicProcedure
    .input(z.string().cuid())
    .output(ApiResponse)
    .mutation(async ({ ctx, input: id }) => {
      try {
        await ctx.prisma.user.delete({
          where: { id },
        });
        return {
          severity: Severity.SUCCESS,
          message: 'User deleted successfully',
        };
      } catch (e: unknown) {
        console.error('Error in deleteUser:', e);
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
          return { severity: Severity.ERROR, message: e.message };
        }
        return { severity: Severity.ERROR, message: 'Unknown error occurred.' };
      }
    }),

  // Fetch one user by ID
  getUserDetails: publicProcedure
    .input(z.string().cuid())
    .query(async ({ ctx, input: id }) => {
      try {
        const user = await ctx.prisma.user.findUnique({
          where: { id },
        });
        return { data: user, res: { severity: Severity.SUCCESS, message: 'Fetched successfully' } };
      } catch (e: unknown) {
        console.error('Error in getUserDetails:', e);
        return { data: null, res: { severity: Severity.ERROR, message: 'Failed to fetch user.' } };
      }
    }),

  // Fetch all users
  selectAllUsers: publicProcedure.query(async ({ ctx }) => {
    try {
      const users = await ctx.prisma.user.findMany();
      return { data: users, res: { severity: Severity.SUCCESS, message: 'Fetched all users' } };
    } catch (e: unknown) {
      console.error('Error in selectAllUsers:', e);
      return { data: [], res: { severity: Severity.ERROR, message: 'Failed to fetch users.' } };
    }
  }),
});
