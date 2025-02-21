import { z } from 'zod';

export const MessageValidations = {
  messageCreateValidationSchema: z.object({
    name: z.string().min(3, 'Name should be at least 3 characters long').max(100, 'Name should not exceed 100 characters'),
    email: z.string().email('Invalid email address'),
    subject: z.string().min(1, 'Subject should be at least 3 characters long').max(200, 'Subject should not exceed 200 characters'),
    message: z.string().min(1, 'Message should be at least 10 characters long').max(1000, 'Message should not exceed 1000 characters'),
  }),
};
