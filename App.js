//const express = require("express");
import "dotenv/config";
import express from "express"
import Hello from "./Hello.js";
import Calculator from "./Calculator.js";
import Assignments from "./Assignments.js";
//import Courses from "./Courses.js";
import Lab5 from "./Lab5.js";
import Module from "./Module.js";
import Todo from "./Todo.js";
import cors from "cors";
import CourseRoutes from "./Kanbas/courses/route.js";
import ModuleRoutes from "./Kanbas/modules/routes.js";
import AssignmentRoutes from "./Kanbas/courses/assignments/route.js";
import mongoose from "mongoose";
import UserRoutes from "./models/Users/routes.js";
import session from "express-session";
const app = express();
app.use(cors({
    credentials: true,
    //origin: "http://localhost:3000",
    origin: process.env.FRONTEND_URL
}));
app.use(express.json());
mongoose.connect("mongodb://127.0.0.1:27017/kanbas");
const sessionOptions = {
    secret: process.env.SESSION_SECRET,
    //secret: "my secret key",
    resave: false,
    saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true,
        domain: process.env.HTTP_SERVER_DOMAIN,
    };
}
app.use(session(sessionOptions));


AssignmentRoutes(app);
CourseRoutes(app);
ModuleRoutes(app);
Lab5(app);
Hello(app);
Calculator(app);
Assignments(app);
Module(app);
Todo(app);
UserRoutes(app);
//Courses(app);

app.listen(process.env.PORT || 4000);