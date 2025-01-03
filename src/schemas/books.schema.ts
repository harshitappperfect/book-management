import {z} from 'zod';

export const BookIdParamSchema = z.object({ id: z.string() });


export const createBookSchema = z.object({
    title: z.string(),
    author: z.string(),
    year: z.number(),
    summary: z.string()
})

export const UpdateBookSchema = z.object({
    title: z.string().optional(),
    author: z.string().optional(),
    year: z.union([z.string(), z.number()]).optional(),  // Allow both string or number for the year
    summary: z.string().optional(),
  });