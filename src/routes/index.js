/** @format */

const router = require("express").Router();

const {
    allPhotos_controller,
    singlePhoto_controller,
    deletePhoto_controller,
    createPhotos_controller,
} = require("../contollers");

router.get("/photos", allPhotos_controller);
router.post("/photos", createPhotos_controller);
router.get("/photos/:id", singlePhoto_controller);
router.delete("/photos/:id", deletePhoto_controller);

module.exports = router;
