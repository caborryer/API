const { Router } = require("express");

const router = Router();

const {
  create,
  list,
  modify,
  search,
  destroy
} = require("../controllers/productController");

router
  .route("/products")
  .get(search)
  .post(create)
  .get(list)
  .put(modify);
// .delete(destroy)

module.exports = router;
