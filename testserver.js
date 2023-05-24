var express = require("express")

app = express()
app.get("*", (req, res) => {
    console.log(req.ip)
    res.send("hello")
})
var port = 19132
app.listen(port)
console.log("listening on port " + port)