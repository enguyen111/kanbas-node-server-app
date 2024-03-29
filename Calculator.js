
export default function Calculator(app) {
    app.get("/a5/add/:num1/:num2",
        (req, res) => {
        let params = req.params;
        const a = parseInt(params.num1);
        const b = parseInt(params.num2);
        const sum = a+b;
        res.send(`Sum of ${a} and ${b} is ${sum}`);
        });
    app.get("/a5/subtract/:num1/:num2",
        (req, res) => {
            let params = req.params;
            const a = parseInt(params.num1);
            const b = parseInt(params.num2);
            const sum = a-b;
            res.send(`Difference of ${a} and ${b} is ${sum}`);
        });
    app.get("/a5/multiply/:num1/:num2",
        (req, res) => {
            let params = req.params;
            const a = parseInt(params.num1);
            const b = parseInt(params.num2);
            const p = a*b;
            res.send(`Product of ${a} and ${b} is ${p}`);
        });
    app.get("/a5/divide/:num1/:num2",
        (req, res) => {
            let params = req.params;
            const a = parseInt(params.num1);
            const b = parseInt(params.num2);
            const d = a/b;
            res.send(`Division of ${a} and ${b} is ${d}`);
        });

    app.get("/a5/calculator", (req, res) => {
        //res.send(query);
        const { a, b, operation } = req.query;
        let result = 0;
        switch (operation) {
            case "add":
                result = parseInt(a) + parseInt(b);
                break;
            case "subtract":
                result = parseInt(a) - parseInt(b);
                break;
            case "multiply":
                result = parseInt(a) * parseInt(b);
                break;
            case "divide":
                result = parseInt(a) / parseInt(b);
                break;
            default:
                result = "Invalid operation";
        }

        res.send(`Result of ${operation} of ${a} and ${b} is ${result}.`);
    });


}