const express = require("express");

const app = express();
let startServerTime = (new Date()).toISOString();

app.get("/", function (req, res) {
	return res.send(`Server is running on ${startServerTime}`);
});

app.listen(80, () => {
	console.log(`Server is running on ${startServerTime}`);
});

module.exports = app;