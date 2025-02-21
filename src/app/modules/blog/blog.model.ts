import { model, Schema } from 'mongoose';
import { IBlog } from './blog.interface';

// Define the Mongoose schema for the blog model
const blogSchema = new Schema<IBlog>({
  title: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true }
});

export const Blog = model<IBlog>('Blog', blogSchema);
