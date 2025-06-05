import type * as trpc from '@trpc/server';
import type * as trpcNext from '@trpc/server/adapters/next';
import type { NodeHTTPCreateContextFnOptions } from '@trpc/server/adapters/node-http';
import type { IncomingMessage } from 'http';
import { getSession } from 'next-auth/react';
import type * as WS from 'ws';
import { prisma  } from './db';

export const createContext = async (
  opts: trpcNext.CreateNextContextOptions,
) => {
  const session = await getSession({ req: opts.req });

  console.log('createContext for', session?.user?.name ?? 'unknown user');

  return {
    session,
    prisma,
  };
};

