const assignment = {
    id: 1,
    title: "A1",
    description:  "something",
    dueDate: "2021-01-01",
    status: "open",
    grade: 0
};

export default function Assignments (app){
    app.get("/a5/assignment", (req, res) => {
        res.json(assignment);
    });
    app.get("/a5/assignment/title", (req, res) => {
            res.json(assignment.title);
        }
    );
    app.get("/a5/assignment/title/:newTitle", (req, res) => {
        let newTitle = req.params.newTitle;
        assignment.title = newTitle;
            res.json(assignment);
        }
    );
}