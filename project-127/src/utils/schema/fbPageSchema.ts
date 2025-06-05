import { PageType } from '@/generated/prisma';
import {z} from 'zod';

export const FacebookPageSchema = z.object({
  pageName: z.string(),
  url: z.string().url(),
  type: z.nativeEnum(PageType,)
})

export const AddFacebookPageSchema  = FacebookPageSchema
  .superRefine((data, ctx) =>{
    if(data.pageName === "")
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["title"],
        message: "Page name cannot be empty",
    });


    if(data.url === ""){
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["url"],
        message: "Url cannot be empty"
    })
  }
  }
})

export type AddFacebookPageSchemaType = z.infer<typeof AddFacebookPageSchema>

export const AddFacebookPageSchemaDefault : AddFacebookPageSchemaType = {
  pageName: "",
  url: "",
  type: PageType.COLLEGE,
}

export const EditFacebookPageSchema  = FacebookPageSchema.extend({
  id: z.string().cuid()
})

export type EditFacebookPageSchemaType  = z.infer<typeof EditFacebookPageSchema>

export const EditFacebookPageSchemaDefault : EditFacebookPageSchemaType = {
  id: "",
  pageName: "",
  url: "",
  type: PageType.COLLEGE,
}

export const DeleteFacebookPageSchema  = z.object({
      id: z.string()
}).superRefine((data, ctx) => {
  if(data.id === "")
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ["id"],
      message: "Facebook page to be removed cannot be empty"
    })

})

export type DeleteFacebookPageSchemaType = z.infer<typeof DeleteFacebookPageSchema>

export const DeleteFacebookPageSchemaDefault : DeleteFacebookPageSchemaType = {
  id: "",
}

