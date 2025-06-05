import { StatusType } from '@/generated/prisma';
import {z} from 'zod';

export const FacebookPostSchema = z.object({
  pageName: z.string(),
  fbPostID: z.string(),
  author: z.string(),
  content: z.string(),
  url: z.string().url(),
  createdAt: z.date(),
  status: z.nativeEnum(StatusType),
})

export const AddFacebookPostSchema  = FacebookPostSchema
  .superRefine((data, ctx) =>{
    if(data.pageName === "")
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["title"],
        message: "Page name cannot be empty",
    });
    if(data.content ===""){
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["content"],
        message: "Content cannot be empty"
    });
    }
    if(data.url === ""){
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["url"],
        message: "Url cannot be empty"
    })
  }
  }
})

export type AddFacebookPostSchemaType = z.infer<typeof AddFacebookPostSchema>

export const AddFacebookPostSchemaDefault : AddFacebookPostSchemaType = {
  pageName: "",
  fbPostID: "",
  author: "",
  content: "",
  url: "",
  createdAt: new Date(),
  status: StatusType.PENDING,
}

export const EditFacebookPostSchema = FacebookPostSchema.extend({
  id: z.string().cuid()
})

export type EditFacebookPostSchemaType = z.infer<typeof EditFacebookPostSchema>

export const EditFacebookPostSchemaDefault : EditFacebookPostSchemaType = {
  id: "",
  pageName: "",
  fbPostID: "",
  author: "",
  content: "",
  url: "",
  createdAt: new Date(),
  status: StatusType.PENDING,
}

export const DeleteFacebookPostSchema  = z.object({
      id: z.string()
}).superRefine((data, ctx) => {
  if(data.id === "")
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ["id"],
      message: "FacebookPost to be removed cannot be empty"
    })

})

export type DeleteFacebookPostSchemaType = z.infer<typeof DeleteFacebookPostSchema>

export const DeleteFacebookPostSchemaDefault : DeleteFacebookPostSchemaType = {
  id: "",
}
