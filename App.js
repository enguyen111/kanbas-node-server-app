//const express = require("express");
import express from "express"
import Hello from "./Hello.js";
import Calculator from "./Calculator.js";
import Assignments from "./Assignments.js";
import Courses from "./Courses.js";
import Lab5 from "./Lab5.js";
import Module from "./Module.js";
const app = express();

Hello(app);
Lab5(app);
Calculator(app);
Assignments(app);
Module(app);
//Courses(app);

app.listen(4000);