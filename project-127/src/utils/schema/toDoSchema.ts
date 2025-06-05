import { z } from 'zod';
import { PriorityType } from '@/generated/prisma';

const today = new Date();

export const ToDoSchema = z.object ({
  title: z.string(),
  description: z.string(),
  dueDate: z.date(),
  createdAt: z.date(),
  priority: z.nativeEnum(PriorityType),
});

export const AddToDoSchema = ToDoSchema
  .superRefine((data, ctx) => {
    if(data.title === "")
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["title"],
        message: "Title cannot be empty"
    });

  const today = new Date();
  today.setHours(0, 0, 0, 0); // Normalize today's date

    if(data.dueDate < today){
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["dueDate"],
        message: "Due data cannot be in the past",
    })
  }
})

export type AddToDoSchemaType = z.infer<typeof AddToDoSchema>;

export const AddToDoSchemaDefault: AddToDoSchemaType = {
  title: "",
  description: "",
  dueDate: today,
  createdAt: today,
  priority: PriorityType.IMPORTANT,
}

export const EditToDoSchema = ToDoSchema.extend({
  id: z.string().cuid()
})

export type EditToDoSchemaType = z.infer<typeof EditToDoSchema>

export const EditToDoSchemaDefault : EditToDoSchemaType  = {
  id: "",
  title: "",
  description: "",
  dueDate: today,
  createdAt: today,
  priority: PriorityType.IMPORTANT,
}

export const DeleteTodoSchema = z.object({
  id: z.string()
}).superRefine((data, ctx) => {
  if(data.id === "")
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ["id"],
      message: "Todo to be removed cannot be empty"
    })
});

export type DeleteTodoSchemaType = z.infer<typeof DeleteTodoSchema>

export const DeleteTodoSchemaDefault = {
  id: ""
}
