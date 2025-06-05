// src/utils/api.ts
import { httpBatchLink, loggerLink } from '@trpc/client';
import { createTRPCNext } from '@trpc/next';
import { type inferRouterInputs, type inferRouterOutputs } from '@trpc/server';
import superjson from 'superjson';
import { type AppRouter } from '@/server/api/root';
import { z } from 'zod';

// If running in the browser, “getBaseUrl()” returns ‘’ so 
// /api/trpc will be used. For SSR, it falls back to localhost:PORT.
const getBaseUrl = () => {
  if (typeof window !== 'undefined') return '';
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return `http://localhost:${process.env.PORT ?? 3000}`;
};

export const api = createTRPCNext<AppRouter>({
  config({ ctx }) {
    return {
      transformer: superjson,
      links: [
        loggerLink({
          enabled: (opts) =>
            process.env.NODE_ENV === 'development' ||
            (opts.direction === 'down' && opts.result instanceof Error),
        }),
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`,
          headers() {
            if (!ctx?.req?.headers) return {};
            return {
              // Pass through any SSR headers if needed
              ...ctx.req.headers,
              'x-ssr': '1',
            };
          },
        }),
      ],
    };
  },
  ssr: false,
});

export type RouterInputs = inferRouterInputs<AppRouter>;
export type RouterOutputs = inferRouterOutputs<AppRouter>;

export enum Severity {
  ERROR = 'error',
  INFO = 'info',
  WARNING = 'warning',
  SUCCESS = 'success',
}

export const ApiResponse = z.object({
  severity: z.nativeEnum(Severity),
  message: z.string(),
});

export type ApiResponseType = z.infer<typeof ApiResponse>;
