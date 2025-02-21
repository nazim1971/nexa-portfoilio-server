"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogService = void 0;
const AppError_1 = require("../../error/AppError");
const blog_model_1 = require("./blog.model");
const http_status_1 = __importDefault(require("http-status"));
const createBlog = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const newBlog = yield blog_model_1.Blog.create(payload);
    if (!newBlog) {
        throw new AppError_1.AppError(http_status_1.default.INTERNAL_SERVER_ERROR, 'Could not create blog!');
    }
    return newBlog;
});
const getAllBlogs = () => __awaiter(void 0, void 0, void 0, function* () {
    const blogs = yield blog_model_1.Blog.find();
    return blogs;
});
const getSingleBlog = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const blog = yield blog_model_1.Blog.findById(id);
    if (!blog) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, 'Blog not found');
    }
    return blog;
});
const updateBlog = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedBlog = yield blog_model_1.Blog.findByIdAndUpdate(id, payload, { new: true, runValidators: true });
    if (!updatedBlog) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, 'Blog not found');
    }
    return updatedBlog;
});
const deleteBlog = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const blog = yield blog_model_1.Blog.findByIdAndDelete(id);
    if (!blog) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, 'Blog not found');
    }
    return blog;
});
exports.BlogService = {
    createBlog,
    getAllBlogs,
    getSingleBlog,
    updateBlog,
    deleteBlog,
};
