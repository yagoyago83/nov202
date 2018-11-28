const express = require("express");
const path = require("path");

const insults = [
    "you  dont look nice today",
    "that dress looks dirty",
    "Are you lazy ass?",
    "you can not do hard things",
    "you've gotten far in this course, easier than you thought",
    "you still cannot  programming, how terrible is that?",
    "stay where you are team",
    "you're so stupid",
    "messy hair",
    "0 performance computer",
    "you smell sh.t",
    "i dont like your shirt",
    "you're worst man in the world",
    "oblique glance eyes",
    "you are bald"
];

function getRandomInsult() {
    const randomIndex = Math.floor(Math.random() * insults.length)
    return insults[randomIndex];
}

const app = express();

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index2.html"))
})

app.get("/insult", function(req, res) {
    res
        .json({
            insult: getRandomInsult()
        })
        .end();
})

app.use("/public", express.static("./public"))

app.listen(3000);

console.log("listening on http://localhost:1245");