import * as dao from "../../models/Modules/dao.js"

function ModuleRoutes(app) {

    app.put("/api/modules/:mid", async (req, res) => {
        const { mid } = req.params;
        const status = await dao.updateModule(mid, req.body);
        res.json(status);
    });


    app.delete("/api/modules/:mid", async (req, res) => {
        const status = await dao.deleteModule(req.params.mid);
        res.json(status);
    });


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