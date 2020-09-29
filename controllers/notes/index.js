//////////////////////////////////
// DEPENDENCIES
/////////////////////////////////
const { Router } = require("express");
const auth = require("../authmiddleware");
const Note = require("../../models/notes")

///////////////////////////////////////
// CREATE ROUTER
///////////////////////////////////////
const router = Router();

///////////////////////////////////////
// ROUTES
///////////////////////////////////////

//Index Route
router.get("/", auth, async (req, res) => {
  try {
  const notes = await Note.find({username: req.session.username})
  res.render("notes/index.jsx", {notes});
  } catch (err) {
    console.log(err);
  }
})
//TEST ROUTE TO SHOW HOW AUTH MIDDLEWARE WORKS

router.get("/", auth, (req, res) => {
  res.send("if you see this you are logged in");
});

///////////////////////////////////////
// Export Router
///////////////////////////////////////
module.exports = router;
