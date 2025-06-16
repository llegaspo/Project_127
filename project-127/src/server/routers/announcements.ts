import { router, publicProcedure } from '../trpc'
import { z } from 'zod';
import { DeleteAnnouncementSchema,
         AddAnnouncementSchema,
         EditAnnouncementSchema} from '@/utils/schema/AnnouncementSchema'
import { prisma } from '@/server/db';


export const announcementSchema = router({
  create: publicProcedure
    .input(AddAnnouncementSchema)
    .mutation(async ({input}) =>{
      try{
        const newTodo = await prisma.announcement.create({
          data: {
          userID: '',
          ...input
        }
      });
      if(newTodo)
        return {message: 'Announcement created Successfully'}
      else
        return {message: 'Announcement cannot be created'}
 }
    catch(e){
      throw new Error("An error has occured.")
    }
  }),

  fetch: publicProcedure
    .input(z.string()) //announcement id
    .query(async ({input}) => {
      try{
        const announcementResult = await prisma.announcement.findUnique({
          where:{
            id: input
        },
      })
      if(!announcementResult){
        return {message: 'No such announcement exist.'}
      }
      return announcementResult;
    } catch (e){
      throw new Error("An error has occured while fetching announcement")
    }
  }),

  fetchAll: publicProcedure
    .query(async () => {
    try{
      const announcements = await prisma.announcement.findMany();
      if(!announcements)
        return {message: 'Announcements cannot be fetched.'}
      return announcements;
    } catch(e){
      throw new Error('An error has occured while fetching announcements.')
    }
  }),

  delete: publicProcedure
    .input(DeleteAnnouncementSchema)
    .mutation(async ({input}) => {
      try{
        const announcementDelete = await prisma.announcement.delete({
          where:{
            id: input.id,
        }
      })

      if(!announcementDelete)
        return {message: 'No such to do announcement.'}
      return {message: 'Announcement has been removed successfully.'}
    } catch(e){
        throw new Error('An error has occured while deleting the announcement')
    }
  }),

  update: publicProcedure
    .input(EditAnnouncementSchema)
    .mutation(async ({input}) => {
      try{
        const announcementUpdate = await prisma.announcement.update({
          where: {
            id: input.id,
        },
          data:{
            title: input.title,
            description: input.description,
            createdBy: input.createdBy,
            createdAt: input.createdAt,
      }
      });

      if(!announcementUpdate)
        return {message: "Cannot update announcement."}
    } catch(e){
      throw new Error("An error has occured while updating the announcement.")
    }
  })
})


