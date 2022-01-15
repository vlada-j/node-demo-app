const express = require("express");

const app = express();
let startServerTime = (new Date()).toISOString();

app.get("/", function (req, res) {
	return res.send(`<h1>Dobro dosli</h1><h2>Startovano: ${startServerTime}</h2>`);
});

app.listen(80, () => {
	console.log(`Server is running on ${startServerTime}`);
});

module.exports = app;