const router = require("express").Router();
const bookRoutes = require("./books");
const googleRoute = require("./googleAPI");

// Book routes
router.use("/books", bookRoutes);
router.use("/google", googleRoute);


module.exports = router;
