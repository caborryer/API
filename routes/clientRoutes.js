const { Router } = require("express");

const router = Router();

const { list } = require("../controllers/clientController");

router.route("/clients").get(list);

module.exports = router;
