// server/api/routers/todo.ts (Corrections applied)
import { createTRPCRouter, publicProcedure } from '../trpc';
import { z } from "zod";
import { Prisma, PriorityType } from '@prisma/client';
import { AddToDoSchema, EditToDoSchema, DeleteTodoSchema } from '@/utils/schema/toDoSchema'; // Ensure these schemas are defined here or imported
import { ApiResponse, Severity } from '@/utils/api';

export const todoRouter = createTRPCRouter({
  createToDo: publicProcedure
    .input(AddToDoSchema)
    .mutation(async ({ ctx, input: {title, description, dueDate, createdBy, priority} }) => {
      try {
        const newTodo = await ctx.prisma.toDo.create({
          data: {
            title: title,
            description: description,
            dueDate:dueDate,
            createdBy: createdBy,
            priority: priority || PriorityType.IMPORTANT,
      
          },
        });
        return newTodo;
      } catch (e: unknown) {
        console.error("Error in createToDo:", e);
        throw new Error('Failed to create ToDo.');
      }
    }),

  // Changed to .query for fetching a single todo
  fetchToDo: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.todo.findUnique({
          where: {
            id: input.id,
          },
        });
      } catch (e) {
        console.error("Error in fetchToDo:", e);
        throw new Error('Failed to fetch ToDo.');
      }
    }),

  // Changed to .query for fetching all todos
  fetchAllToDo: publicProcedure
    .input(z.object({}).optional()) // No input needed for fetching all, or add optional filters
    .query(async ({ ctx }) => {
      try {
        return await ctx.prisma.todo.findMany({
          orderBy: {
            dueDate: 'asc',
          },
  
        });
      } catch (e) {
        console.error("Error in fetchAllToDo:", e);
        throw new Error('Failed to fetch ToDos.');
      }
    }),

  editTodo: publicProcedure
    .input(EditToDoSchema)
    .output(ApiResponse)
    .mutation(async ({ ctx, input }) => {
      try {
        // Separate ID from data to update
        const { id, ...dataToUpdate } = input;
        const result = await ctx.prisma.todo.update({
          where: {
            id: id,
          },
          data: {
            ...dataToUpdate, // Apply all optional updates from input
          },
        });
        return { severity: Severity.SUCCESS, message: 'Updated todo successfully' };
      } catch (e: unknown) {
        console.error("Error in editTodo:", e);
        let message = 'Error in updating todo';
        if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === 'P2025') {
          message = 'Todo item not found.';
        }
        return { severity: Severity.ERROR, message };
      }
    }),

  deleteToDo: publicProcedure
    .input(DeleteTodoSchema)
    .output(ApiResponse)
    .mutation(async ({ ctx, input }) => {
      try {
        await ctx.prisma.todo.delete({
          where: {
            id: input.id,
          },
        });
        return { severity: Severity.SUCCESS, message: 'Deleted todo successfully' };
      } catch (e: unknown) {
        console.error("Error in deleteToDo:", e);
        let message = 'Error in deleting todo';
        if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === 'P2025') {
          message = 'Todo item not found.';
        }
        return { severity: Severity.ERROR, message };
      }
    }),
});
