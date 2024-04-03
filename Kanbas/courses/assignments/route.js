import db from "../../Database/index.js";
function AssignmentRoutes(app) {

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