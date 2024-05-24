const express = require("express");

const router = express.Router();

const { browse, read } = require("../../../controllers/categoryActions");

router.get("/", browse);

router.get("/:id", read);

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

/* Here you code */

/* ************************************************************************* */

module.exports = router;