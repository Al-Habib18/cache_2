/** @format */
const getSinglePhoto = require("../services/getSinglePhoto");
const simulateApiCall = require("../utils/simulateApiCall");
const getOrSetCache = require("../utils/getOrSetCache");

const singlePhoto_controller = async (req, res, next) => {
    try {
        const { id } = req.params;
        const key = `photo:${id}`;
        const photo = await getOrSetCache(async () => {
            return await simulateApiCall(() => getSinglePhoto(id));
        }, key);

        res.json({ msg: "ok", data: photo });
    } catch (err) {
        next(err);
    }
};

module.exports = singlePhoto_controller;
