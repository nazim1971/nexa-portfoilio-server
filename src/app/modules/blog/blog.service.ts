import { AppError } from "../../error/AppError";
import { IBlog } from "./blog.interface";
import { Blog } from "./blog.model";
import httpStatus from 'http-status';

const createBlog = async (payload: IBlog) => {
  const newBlog = await Blog.create(payload);
  if (!newBlog) {
    throw new AppError(httpStatus.INTERNAL_SERVER_ERROR, 'Could not create blog!');
  }
  return newBlog;
};

const getAllBlogs = async () => {
  const blogs = await Blog.find();
  return blogs;
};

const getSingleBlog = async (id: string) => {
  const blog = await Blog.findById(id);
  if (!blog) {
    throw new AppError(httpStatus.NOT_FOUND, 'Blog not found');
  }
  return blog;
};

const updateBlog = async (id: string, payload: Partial<IBlog>) => {
  const updatedBlog = await Blog.findByIdAndUpdate(id, payload, { new: true, runValidators: true });
  if (!updatedBlog) {
    throw new AppError(httpStatus.NOT_FOUND, 'Blog not found');
  }
  return updatedBlog;
};

const deleteBlog = async (id: string) => {
  const blog = await Blog.findByIdAndDelete(id);
  if (!blog) {
    throw new AppError(httpStatus.NOT_FOUND, 'Blog not found');
  }
  return blog;
};

export const BlogService = {
  createBlog,
  getAllBlogs,
  getSingleBlog,
  updateBlog,
  deleteBlog,
};
