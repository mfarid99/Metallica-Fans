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

//New Route

router.get("/new", auth, async (req, res) => {
  res.render("notes/signup.jsx")
})

//Create Route
router.post("/", auth, async (req, res) => {
  req.body.username = req.session.username
  const newNote = await Note.create(req.body)
  res.redirect("/notes/")
});

//Delete Route

router.delete("/:id", auth, async (req, res)=> {
  await Note.findByIdAndDelete(req.params.id)
  res.redirect("/notes/")
})
//TEST ROUTE TO SHOW HOW AUTH MIDDLEWARE WORKS

router.get("/", auth, (req, res) => {
  res.send("if you see this you are logged in");
});

///////////////////////////////////////
// Export Router
///////////////////////////////////////
module.exports = router;
