/** @format */
const createPhoto = require("../services/createPhoto");
const deleteCache = require("../utils/deleteCache");

const createPhotos_controller = (req, res, next) => {
    try {
        const { title, url, thumbnailUrl, albumId } = req.body;
        const photo = createPhoto({ title, url, thumbnailUrl, albumId });

        res.json({ message: "Photo created successfully", data: photo });

        // Create delete
        deleteCache({
            pattern: "photos:_start=*",
        });
    } catch (err) {
        next(err);
    }
};

module.exports = createPhotos_controller;
