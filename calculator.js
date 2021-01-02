const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));

/****** index.html GET and POST  methods ******/

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;

    res.send("The result of the calculation is " + result);
});

/****** bmiCalculator.html GET and POST methods  ******/

app.get("/bmiCalculator", (req, res) => {
    res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/bmiCalculator", (req, res) => {
    var height = Number(req.body.height);
    var weight = Number(req.body.weight);

    var bmi = Math.round(weight / Math.pow(height, 2));
    

    res.send("Your BMI is " + bmi);
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});