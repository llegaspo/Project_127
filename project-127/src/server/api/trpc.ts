// server/api/trpc.ts
import { initTRPC, TRPCError } from '@trpc/server';
import superjson from 'superjson';
import type { CreateNextContextOptions } from '@trpc/server/adapters/next';
import { prisma } from '../db';

// 1) Build a context that returns exactly { prisma }
export async function createContext(_opts: CreateNextContextOptions) {
  return { prisma };
}

// Derive a TypeScript type for our context
export type Context = Awaited<ReturnType<typeof createContext>>;

// 2) Initialize tRPC and tell it about our Context type
const t = initTRPC.context<Context>().create({
  transformer: superjson,
  errorFormatter({ shape }) {
    return shape;
  },
});

// 3) Export a “router‐creator” and a base “procedure”  
export const createTRPCRouter = t.router;
export const publicProcedure = t.procedure;
