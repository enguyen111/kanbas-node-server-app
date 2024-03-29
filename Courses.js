let courses = [
    {
        id: 1,
        title: "Course1",
        description: "something",
        instructor: "instructor 1",
        startDate: "2021-01-01",
        endDate: "2021-11-01",
        status: "open"

    },
    {
        id: 2,
        title: "Course2",
        description: "something",
        instructor: "instructor 2",
        startDate: "2021-01-01",
        endDate: "2021-11-01",
        status: "open",
        sections: [
            {
                id: 1,
                title: "Section 1",
                students: [
                    {
                        id: 1,
                        name: "Student 1"
                    },
                    {
                        id: 2,
                        name: "Student 2"
                    }
                ]
            },
            {
                id: 2,
                title: "Section 2"
            }
        ]
    },
    {
        id: 3,
        title: "Course3",
        description: "something",
        instructor: "instructor 1",
        startDate: "2021-01-01",
        endDate: "2021-11-01",
        status: "open"

    },
];

export default function Courses(app) {
    const findAllCourse = (req, res) => {
        const query = req.query;
        if (query.instructor) {
            const instructor = query.instructor;
            const filteredCourses = courses.filter ((course) => course.instructor === instructor);
            res.json(filteredCourses);
            return;
        }
        res.json(courses);
    };
    app.get("/api/courses", findAllCourse);

    const findCourseById = (req, res) => {
        const id = req.params.id;
        const course = courses.find((course) => course.id === id);
        res.json(course);
    }

    const findSectionsForCourse = (req, res) => {
        const id = req.params.id;
        const course = courses.find(
            (course) => course.id === id);
        if (course.sections) {
            res.json(course.sections);
        }
        else {
            res.json([]);
        }
    };

    app.get("/api/courses", findAllCourse);
    app.get("/api/courses/:id", findCourseById);
    app.get("/api/courses/:id/sections", findSectionsForCourse);

}