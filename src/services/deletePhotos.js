/** @format */

const photos = require("../db");

const deletePhotos = (id) => {
    const index = photos.findIndex((photo) => photo.id === parseInt(id, 10));
    if (index === -1) {
        const error = new Error("photo not found");
        error.status = 404;
        throw error;
    }

    const photo = photos.splice(index, 1);

    return { id };
};

module.exports = deletePhotos;
