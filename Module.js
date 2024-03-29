const module = {
    id: 1,
    name: "M1",
    description:  "something",
    course: "RS101"
};

export default function Module (app){
    app.get("/a5/module", (req, res) => {
        res.json(module);
    });
    app.get("/a5/module/name", (req, res) => {
            res.json(module.name);
        }
    );
    app.get("/a5/module/name/:newName", (req, res) => {
            let newName = req.params.newName;
            module.name = newName;
            res.json(module);
        }
    );
}