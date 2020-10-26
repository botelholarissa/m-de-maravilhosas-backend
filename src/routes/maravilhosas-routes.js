const express = require('express');
const router = express.Router();
const controller = require('../controllers/maravilhosas-controller')
const cors =  require('cors')

//get /maravilhosas

router.get("/maravilhosas", cors(), controller.getMaravilhosas);

//get /maravilhosas/id

router.get("/maravilhosas/:id", cors(), controller.getMaravilhosaById);

//post /maravilhosas

router.post("/maravilhosas", cors(), controller.addMaravilhosa);

//put /maravilhosas/id

router.put("/maravilhosas/:id", cors(), controller.updateMaravilhosa);

//delete /maravilhosas/id

router.delete("/maravilhosas/:id", cors(), controller.deleteMaravilhosa);



module.exports = router;