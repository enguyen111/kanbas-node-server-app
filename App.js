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
const app = express();
app.use(cors());
Lab5(app);
Hello(app);
Calculator(app);
Assignments(app);
Module(app);
Todo(app);
//Courses(app);

app.listen(4000);