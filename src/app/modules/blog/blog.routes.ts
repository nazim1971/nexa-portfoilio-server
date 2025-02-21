import { Router } from "express";
import { validateMiddlewire } from "../../middlewire/validateRequest";
import { blogValidations } from "./blog.validation";
import { BlogController } from "./blog.controller";

const router = Router();

router.post('/', validateMiddlewire(blogValidations.blogValidationSchema), BlogController.createBlog);

router.get('/', BlogController.getAllBlogs);
router.get('/:id', BlogController.getSingleBlog);
router.patch('/:id', validateMiddlewire(blogValidations.updateBlogValidationSchema), BlogController.updateBlog);
router.delete('/:id', BlogController.deleteBlog);

export const BlogRoutes = router;
