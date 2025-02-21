import { z } from 'zod';

const blogValidationSchema = z.object({
  title: z.string().min(1, 'Title is required!'),     
  content: z.string().min(1, 'Content is required!'),  
  image: z.string().min(1, 'Image URL is required!'),  
  category: z.string().min(1, 'Category is required!'),  
});

const updateBlogValidationSchema = z.object({
  title: z.string().min(1, 'Title is required!').optional(),  
  content: z.string().min(1, 'Content is required!').optional(),  
  image: z.string().min(1, 'Image URL is required!').optional(),  
  category: z.string().min(1, 'Category is required!').optional(), 
});

export const blogValidations = { blogValidationSchema, updateBlogValidationSchema };
