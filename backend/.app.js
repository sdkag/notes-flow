const express = require("express");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const cors = require("cors");
const csurf = require("csurf");
const helmet = require("helmet");

const app = express();

const router = express.Router();
app.use(express.json());
// const apiRouter = require("./api");
router.get("/api/users", async function (req, res) {
  const user = await User.findAll({ include: ["notes"] });
});

router.get(
  "/api/users/:username",
  asyncHandler(async function (req, res) {
    const {
      params: { username },
    } = req;
    const user = await User.findOne({
      include: ["notes"],
      where: { username },
    });
    return res.json({ user });
  })
);
// router.use("/api", apiRouter);
router.get(
  "/api/notes",
  asyncHandler(async function (req, res) {
    const notes = await Note.findAll();
    console.log("is this not wworking?!?!?!?!\n\n\n\n", notes);
    return res.json({ notes });
  })
);
router.get("/hello/world", function (req, res) {
  res.cookie("XSRF-TOKEN", req.csrfToken());
  res.send("Hello World!");
});
const path = require("path");

router.use(express.static(path.resolve("../tiny-notes/build")));

// Static routes
// Serve React build files in production
if (process.env.NODE_ENV === "production") {
  const path = require("path");
  // Serve the frontend's index.html file at the root route
  router.get("/", (req, res) => {
    res.cookie("XSRF-TOKEN", req.csrfToken());
    res.sendFile(
      path.resolve(__dirname, "../../tiny-notes", "build", "index.html")
    );
  });

  // Serve the static assets in the frontend's build folder
  router.use(express.static(path.resolve("../tiny-notes/build")));

  // Serve the frontend's index.html file at all other routes NOT starting with /api
  router.get(/^(?!\/?api).*/, (req, res) => {
    res.cookie("XSRF-TOKEN", req.csrfToken());
    res.sendFile(
      path.resolve(__dirname, "../../tiny-notes", "build", "index.html")
    );
  });
} else {
  router.get("/api/csrf/restore", (req, res) => {
    res.cookie("XSRF-TOKEN", req.csrfToken());
    res.status(201).json({});
  });
}

module.exports = app;
