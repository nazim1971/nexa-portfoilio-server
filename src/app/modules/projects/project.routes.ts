import { Router } from "express";
import { validateMiddlewire } from "../../middlewire/validateRequest";
import { projectValidations } from "./project.validation";
import { ProjectController } from "./project.controller";

const router = Router();

router.post('/', validateMiddlewire(projectValidations.projectValidationSchema), ProjectController.createProject);

router.get('/', ProjectController.getAllProjects);
router.get('/:id', ProjectController.getSingleProject);
router.patch('/:id', validateMiddlewire(projectValidations.updateProjectValidationSchema) ,ProjectController.updateProject);
router.delete('/:id', ProjectController.deleteProject);

export const ProjectRoutes = router;