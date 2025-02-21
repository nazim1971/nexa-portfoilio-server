"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const blog_routes_1 = require("../modules/blog/blog.routes");
const auth_routes_1 = require("../modules/auth/auth.routes");
const admin_routes_1 = require("../modules/admin/admin.routes");
const project_routes_1 = require("../modules/projects/project.routes");
const message_routes_1 = require("../modules/message/message.routes");
const router = (0, express_1.Router)();
// Define all module-specific routes
const moduleRoutes = [
    { path: '/blogs', route: blog_routes_1.BlogRoutes },
    { path: '/projects', route: project_routes_1.ProjectRoutes },
    { path: '/messages', route: message_routes_1.MessageRoutes },
    {
        path: '/auth',
        route: auth_routes_1.AuthRoute,
    },
    {
        path: '/admin',
        route: admin_routes_1.AdminRoute,
    },
];
// Register each module's routes
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
