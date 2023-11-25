/** @format */
const getSinglePhoto = require("../services/getSinglePhoto");

const singlePhoto_controller = (req, res, next) => {
    res.status(200).json({ msg: "0k" });
};

module.exports = singlePhoto_controller;
