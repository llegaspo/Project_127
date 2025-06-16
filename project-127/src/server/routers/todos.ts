import { router, publicProcedure } from '../trpc'
import { z } from 'zod';
import { DeleteToDoSchema,
         AddToDoSchema,
         EditToDoSchema} from '@/utils/schema/ToDoSchema'
import { prisma } from '@/server/db';


export const todoRouter = router({
  create: publicProcedure
    .input(AddToDoSchema)
    .mutation(async ({input}) =>{
      try{
        const newTodo = await prisma.toDo.create({
          data: input,
      });
      if(newTodo)
        return {message: 'To do created Successfully'}
      else
        return {message: 'To do cannot be created'}
 }
    catch(e){
      throw new Error("An error has occured.")
    }
  }),

  fetch: publicProcedure
    .input(z.string()) //todo id
    .query(async ({input}) => {
      try{
        const todoResult = await prisma.toDo.findUnique({
          where:{
            id: input
        },
      })
      if(!todoResult){
        return {message: 'No such todo exist.'}
      }
      return todoResult;
    } catch (e){
      throw new Error("An error has occured while fetching to do")
    }
  }),

  fetchAll: publicProcedure
    .query(async () => {
    try{
      const todos = await prisma.toDo.findMany();
      if(!todos)
        return {message: 'To dos cannot be fetched.'}
      return todos;
    } catch(e){
      throw new Error('An error has occured while fetching todos.')
    }
  }),

  delete: publicProcedure
    .input(DeleteToDoSchema)
    .mutation(async ({input}) => {
      try{
        const todoDelete = await prisma.toDo.delete({
          where:{
            id: input.id,
        }
      })

      if(!todoDelete)
        return {message: 'No such to do exist.'}
      return {message: 'To do has been removed successfully.'}
    } catch(e){
        throw new Error('An error has occured while deleting the to do')
    }
  }),

  update: publicProcedure
    .input(EditToDoSchema)
    .mutation(async ({input}) => {
      try{
        const todoUpdate = await prisma.toDo.update({
          where: {
            id: input.id,
        },
          data:{
            title: input.title,
            description: input.description,
            dueDate: input.dueDate,
            priority: input.priority,
      }
      });

      if(!todoUpdate)
        return {message: "Cannot update to do."}
      return { message: 'To do has been updated successfully'}
    } catch(e){
      throw new Error("An error has occured while updating the to do.")
    }
  })
})

