const router = require("express").Router();
const {
  sell,
  bulkbuy,
  find,
  draw,
  findByID,
  updatebyId,
  deleteById,
  findByUsername,
  updatebyUsername,
} = require("../controller/controller");

router.route("/t/:id").get(findByID).patch(updatebyId).delete(deleteById);

router.route("/u/:username").get(findByUsername).patch(updatebyUsername);

router.get("/draw/:wc", draw);

router.post("/bulkbuy", bulkbuy);

router.post("/sell", sell);

router.get("/", find);

module.exports = router;
