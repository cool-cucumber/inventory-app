const express = require("express");
const router = express.Router();
const { Sauce } = require("../models");



// GET /sauce
router.get("/", async (req, res, next) => {
  try {
    const sauces = await Sauce.findAll();
    res.send(sauces);
  } catch (error) {
    next(error);
  }
});


//DELETE/ sauce
router.delete("/:id", async (req,res) => {
  try {
    
    const idx = req.params.id;
    const deletedRow = await Sauce.destroy({ where: { id: idx } });
    res.send('Sauce delted');
    
  } catch (error) {
    next(error);
  }
});



module.exports = router;
