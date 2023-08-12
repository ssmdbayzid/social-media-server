const { postMedia, getAllMedia } = require("../controllers/mediaControllers");

const mediaRoute = require("express").Router()

mediaRoute.post("/", postMedia)
mediaRoute.get('/', getAllMedia)

module.exports = mediaRoute;