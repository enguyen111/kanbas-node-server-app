import db from "../../Database/index.js";
function AssignmentRoutes(app) {


    app.put("/api/courses/:cid/assignments/:aid", (req, res) => {
        const { aid } = req.params;
        const { assignment } = req.body;

        const assignmentIndex = db.assignments.findIndex(
            (a) => a._id === aid);
        db.assignments[assignmentIndex] = {
            ...db.assignments[assignmentIndex],
            ...assignment
        };
        res.sendStatus(204);
    });


    app.delete("/api/courses/:cid/assignments/:aid", (req, res) => {
        const { aid } = req.params;
        db.assignments = db.assignments.filter((a) => a._id !== aid);
        res.sendStatus(200);
    });



    app.post("/api/courses/:cid/assignments", (req, res) => {
        const { cid } = req.params;
        const { assignment, assignmentType } = req.body;

        const newAssignment = {
            _id: new Date().getTime().toString(),
            course: cid,
            type: assignmentType,
            ...assignment,
        };

        db.assignments.push(newAssignment);

        res.send(newAssignment);
    });


    app.get("/api/courses/:cid/assignments", (req, res) => {
        const { cid } = req.params;
        const assignments = db.assignments
            .filter((a) => a.course === cid);
        res.send(assignments);
    });
}
export default AssignmentRoutes;