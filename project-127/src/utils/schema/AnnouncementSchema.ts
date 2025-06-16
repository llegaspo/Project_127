import { z } from 'zod';
import { AnnouncementSource } from '@prisma/client';

export const AnnouncementSchema = z.object({
  title: z.string(),
  description: z.string(),
  createdBy: z.string(),
  createdAt: z.date(),
  Source: z.nativeEnum(AnnouncementSource),
})

export const AddAnnouncementSchema = AnnouncementSchema
  .superRefine((data, ctx) => {
    if(data.title.trim() === '')
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['title'],
        message: "Title cannot be empty."
    })
})

export type AddAnnouncementSchemaType = z.infer<typeof AddAnnouncementSchema>

export const AddAnnouncementSchemaDefault : AddAnnouncementSchemaType = {
  title: '',
  description: '',
  createdBy: '',
  createdAt: new Date(),
  Source: AnnouncementSource.CUSTOM,
}

export const EditAnnouncementSchema = AnnouncementSchema.extend({
  id: z.string().cuid()
})

export type EditAnnouncementSchemaType = z.infer<typeof EditAnnouncementSchema>

export const  EditAnnouncementSchemaDefault : EditAnnouncementSchemaType = {
  id: '',
  title: '',
  createdBy: '',
  createdAt: new Date(),
  description: '',
  Source: AnnouncementSource.CUSTOM
}

export const DeleteAnnouncementSchema = z.object({
  id: z.string().cuid()
})

export type DeleteAnnouncementSchemaType = z.infer<typeof DeleteAnnouncementSchema>

export const DeleteAnnouncementSchemaDefaults : DeleteAnnouncementSchemaType = {
  id: '',
}
