const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.status.json({
        msg: "All OK"
    })
});

app.listen(3000, () => {
    console.log("Server Started");
})