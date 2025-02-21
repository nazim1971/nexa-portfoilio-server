"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogValidations = void 0;
const zod_1 = require("zod");
const blogValidationSchema = zod_1.z.object({
    title: zod_1.z.string().min(1, 'Title is required!'),
    content: zod_1.z.string().min(1, 'Content is required!'),
    image: zod_1.z.string().min(1, 'Image URL is required!'),
    category: zod_1.z.string().min(1, 'Category is required!'),
});
const updateBlogValidationSchema = zod_1.z.object({
    title: zod_1.z.string().min(1, 'Title is required!').optional(),
    content: zod_1.z.string().min(1, 'Content is required!').optional(),
    image: zod_1.z.string().min(1, 'Image URL is required!').optional(),
    category: zod_1.z.string().min(1, 'Category is required!').optional(),
});
exports.blogValidations = { blogValidationSchema, updateBlogValidationSchema };
