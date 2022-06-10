const express = require('express');
const router = express.Router();
const multer = require("multer")
const {createOrpholin , findOrpholin, updateOrpholin, deleteOrpholin} = require("../controllers/orpholinController");
const path = require('path');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(path.dirname(__dirname), './images'))
    },
    filename: function (req, file, cb) {
      cb(null, shortid.generate() + '-' + file.originalname)
    }
})
const Upload= multer({storage})

router.post('/createOrpholin',Upload.single('icon'), createOrpholin);
router.get('/getOrpholin',findOrpholin);
router.put('/updateOrpholin/:id',updateOrpholin);
router.delete('/deleteOrpholin/:id',deleteOrpholin);




module.exports = router;