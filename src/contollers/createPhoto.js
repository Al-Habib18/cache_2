/** @format */
const createPhoto = require("../services/createPhoto");

const createPhotos_controller = (req, res, next) => {
    res.status(201).json({ msg: "photo created successfully" });
};

module.exports = createPhotos_controller;
