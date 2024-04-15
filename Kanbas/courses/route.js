import Database from "../Database/index.js";
import * as dao from "../../models/Courses/dao.js"
export default function CourseRoutes(app) {

    app.get("/api/courses/:id", async (req, res) => {
        //console.log(req.params.id);
        const course = await dao.findCourseById(req.params.id);
        res.json(course);
    });
    app.put("/api/courses/:id", async (req, res) => {
        const { id } = req.params;
        const status = await dao.updateCourse(id, req.body);
        res.json(status);
    });

    app.delete("/api/courses/:id", async (req, res) => {
        const status = await dao.deleteCourse(req.params.id);
        res.json(status);
    });

    app.post("/api/courses", async (req, res) => {
        const course = await dao.createCourse(req.body);
        res.json(course);
    });

    app.get("/api/courses", async (req, res) => {
        const courses = await dao.findAllCourses();
        res.json(courses);
    });
}
