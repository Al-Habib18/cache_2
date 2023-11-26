/** @format */

const Redis = require("ioredis");

const redisClient = new Redis({
    host: "127.0.0.1",
    port: 6379,
    // password: "12345678",
});

module.exports = redisClient;
