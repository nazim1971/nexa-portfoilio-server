import { Router } from 'express';
import { BlogRoutes } from '../modules/blog/blog.routes';
import { AuthRoute } from '../modules/auth/auth.routes';
import { AdminRoute } from '../modules/admin/admin.routes';
import { ProjectRoutes } from '../modules/projects/project.routes';
import { MessageRoutes } from '../modules/message/message.routes';

const router = Router();

// Define all module-specific routes
const moduleRoutes = [
  { path: '/blogs', route: BlogRoutes },
  {path: '/projects', route: ProjectRoutes  },
  {path: '/messages', route: MessageRoutes  },
  {
    path: '/auth',
    route: AuthRoute,
  },
  {
    path: '/admin',
    route: AdminRoute,
  },
];

// Register each module's routes
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
