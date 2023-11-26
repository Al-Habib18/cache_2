/** @format */

require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const userRouter = require("./routes");

app.use(cors());
app.use(express.json());

app.use(userRouter);

app.get("/users", (req, res, next) => {
    // set cache control
    res.header("Cache-Control", "public, max-age=60");

    console.log("hit");

    res.status(200).json({ msg: "ok" });
});

app.use((err, req, res) => {
    const errorObj = {
        message: err?.message || "something went wrong",
        status: err?.status || 500,
    };

    res.status(err.status).json(errorObj);
});

app.listen(4000, () => {
    console.log("http://localhost:4000");
});
