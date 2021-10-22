const router = require("express").Router();

// GET /api/set-token-cookie
const asyncHandler = require("express-async-handler");
const { User } = require("../../db/models");

// Return all Notes
router.get(
  "/api/me",
  asyncHandler(async (req, res, next) => {
    const notes = await Note.findAll();
    i;
    return res.json({
      notes,
    });
  })
);

module.exports = router;
