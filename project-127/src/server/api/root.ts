import { createTRPCRouter } from './trpc';
import { userRouter } from './routers/user'
import { todoRouter } from './routers/todo'
import { facebookPageRouter } from './routers/facebookpage'
import { announcementRouter } from './routers/announcement'
import { facebookPostRouter } from './routers/facebookpost'

export const appRouter = createTRPCRouter({
  user: userRouter,
  todo: todoRouter,
  facebookPage: facebookPageRouter,
  announcement: announcementRouter,
  facebookPost: facebookPostRouter,
});

export type AppRouter= typeof appRouter;
