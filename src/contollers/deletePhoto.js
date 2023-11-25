/** @format */

const deletePhoto = require("../services/deletePhotos");

const deletePhoto_controller = (req, res, next) => {
    res.status(203).json({ msg: "photo deleted successfully" });
};

module.exports = deletePhoto_controller;
