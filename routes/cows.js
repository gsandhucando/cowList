let router = require("express").Router();
let controller = require("../controllers/cow_controller");

router.get("/cows", controller.getCowController);

router.post("/cows", controller.insertCowController);

module.exports = router;