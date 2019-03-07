const router = require("express").Router();
const googleResultsController = require("../../controllers/googleResultsController");

// Matches with "/api/google"
router
  .route("/")
  .get(googleResultsController.findAll);

module.exports = router;