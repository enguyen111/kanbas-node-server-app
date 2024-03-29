export default function Hello (app) {

    function rootHandler(req, res) {
        res.send("<h1>Welcome to Full Stack Development!</h1>");
    }

    function sayHello(req, res) {
        res.send("<h1>Life is good</h1>");

    }

    app.get("/", rootHandler);
    app.get("/hello", sayHello);
    app.get("/good", (req, res) => {
        res.send("<h1>Good Morning</h1>");
    });

}