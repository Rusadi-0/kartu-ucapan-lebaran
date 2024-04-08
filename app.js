const express = require("express");
const path = require("path");

const app = express();
const port = 1445;

const publicDirectoryPath = path.join(__dirname, "/public_html/");

app.use(express.static(publicDirectoryPath));

app.get("/", (req, res) => {
	res.sendFile(path.join(publicDirectoryPath, "index.html"));
});

app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
});
