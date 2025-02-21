import { z } from 'zod';

const projectValidationSchema = z.object({
  name: z.string().min(1, 'Name is required!'),      
  title: z.string().min(1, 'Title is required!'),      
  image: z.string().optional(), 
  description: z.string().min(1, 'Description is required!'), 
  liveLink: z.string().min(1, 'Description is required!') ,
  serverLink: z.string().optional(),  
  clientLink: z.string().optional(),  
});

const updateProjectValidationSchema = z.object({
  name: z.string().min(1, 'Name is required!').optional(),  
  title: z.string().min(1, 'Title is required!').optional(),  
  image: z.string().optional(),              
  description: z.string().min(1, 'Description is required!').optional(),  
  liveLink: z.string().optional(),
  serverLink: z.string().optional(), 
  clientLink: z.string().optional(), 
});

export const projectValidations = { projectValidationSchema, updateProjectValidationSchema}