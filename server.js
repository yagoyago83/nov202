const express = require("express");
const path = require("path");

const complements = [
    "you look nice today",
    "that dress looks great",
    "have you been working out?",
    "you can do hard things",
    "you've gotten far in this course, easier than you thought",
    "you're programming, how cool is that?",
    "go team",
    "you're so smart",
    "nice hair",
    "nice computer",
    "you smell good",
    "you have a nice shirt",
    "you're nice",
    "nice eyes",
    "nice beard"
];

function getRandomComplement() {
    const randomIndex = Math.floor(Math.random() * complements.length)
    return complements[randomIndex];
}

const app = express();

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"))
})

app.get("/complement", function(req, res) {
    res
        .json({
            complement: getRandomComplement()
        })
        .end();
})

app.use("/public", express.static("./public"))

app.listen(3000);

console.log("listening on http://localhost:3000");