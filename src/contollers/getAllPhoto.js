/** @format */
const photos = require("../db");
const getPhotos = require("../services/getPhotos");
const simulateApiCall = require("../utils/simulateApiCall");

const allPhotos_controller = async (req, res, next) => {
    try {
        const { _start, _limit } = req.query;
        const start = parseInt(_start, 10) || 0;
        const limit = parseInt(_limit, 10) || photos.length;
        const data = await simulateApiCall(() =>
            getPhotos(start, start + limit)
        );
        /* 
        const key = `photos:_start:${start}&_limit:${limit}`;
        const data =  await getOrSetCache( async()=>{
            const data = await simulateApiCall(() => getPhotos(start, start + limit));
            return data ;
        })
        */

        res.status(200).json({ data: data });
    } catch (err) {
        next(err);
    }
};

module.exports = allPhotos_controller;
