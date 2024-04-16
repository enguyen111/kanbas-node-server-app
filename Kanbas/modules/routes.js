import db from "../Database/index.js";
import * as dao from "../../models/Modules/dao.js"

function ModuleRoutes(app) {
    /*
    app.put("/api/modules/:mid", (req, res) => {
        const { mid } = req.params;
        const moduleIndex = db.modules.findIndex(
            (m) => m._id === mid);
        db.modules[moduleIndex] = {
            ...db.modules[moduleIndex],
            ...req.body
        };
        res.sendStatus(204);
    });


    app.delete("/api/modules/:mid", (req, res) => {
        const { mid } = req.params;
        db.modules = db.modules.filter((m) => m._id !== mid);
        res.sendStatus(200);
    });

     */

    app.post("/api/courses/:cid/modules", async (req, res) => {
        const newModule = await dao.createModule(req.body);
        res.json(newModule);
    });

    app.get("/api/courses/:cid/modules", async (req, res) => {
        const { cid } = req.params;
        const modules = await dao.findAllModules(cid);
        /*
        console.log("Lessons: "+ modules);
        for (let i = 0; i < modules.length; i++) {
            console.log(modules.lessons);
            console.log("----")
        }

         */
        res.json(modules);
    });
}
export default ModuleRoutes;