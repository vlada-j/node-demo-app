const express = require("express");

const app = express();
let startServerTime = (new Date()).toISOString();

app.get("/", function (req, res) {
	return res.send(`Server is running on ${startServerTime}`);
});

// listen to port 7000 by default
app.listen(process.env.PORT || 7777, () => {
	console.log(`Server is running on ${startServerTime}`);
});

module.exports = app;