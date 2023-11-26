/** @format */

const deletePhotos = require("../services/deletePhotos");
const deleteCache = require("../utils/deleteCache");

const deletePhoto_controller = (req, res, next) => {
    try {
        const { id } = req.params;

        const deletePhoto = deletePhotos(id);
        res.json({ msg: "ok", data: deletePhoto });

        const key = `photo:${id}`;
        deleteCache({
            keys: [key],
            pattern: "photos:_start=*",
        });
    } catch (err) {
        next(err);
    }
};

module.exports = deletePhoto_controller;
