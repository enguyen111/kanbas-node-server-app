//const express = require("express");
import express from "express"
import Hello from "./Hello.js";
import Calculator from "./Calculator.js";
import Assignments from "./Assignments.js";
import Courses from "./Courses.js";
import Lab5 from "./Lab5.js";
import Module from "./Module.js";
import Todo from "./Todo.js";
import cors from "cors";
import CourseRoutes from "./Kanbas/courses/route.js";
import ModuleRoutes from "./Kanbas/modules/routes.js";
import AssignmentRoutes from "./Kanbas/courses/assignments/route.js";
const app = express();
app.use(cors());
app.use(express.json());

AssignmentRoutes(app);
CourseRoutes(app);
ModuleRoutes(app);
Lab5(app);
Hello(app);
Calculator(app);
Assignments(app);
Module(app);
Todo(app);
//Courses(app);

app.listen(process.env.PORT || 4000);