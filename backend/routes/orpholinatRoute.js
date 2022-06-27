const Orpholinat = require('../models/OrpholinatModel')
const express = require('express')
const router = express.Router()
const OrpholinatController = require('../controllers/orpholinatController');
const multer  = require('multer')
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      let extArray = file.mimetype.split("/");
      let extension = extArray[extArray.length - 1];
      cb(null, file.fieldname + '-' + Date.now()+ '.' +extension)
    }
  })
const upload = multer({ storage: storage })
router
    .route('/create')
    .post(upload.single('image'),OrpholinatController.addOrpholinat)

router
    .route('/update/:id')
    .post(OrpholinatController.updateOrpholinat)

router
    .route('/delete/:id')
    .delete(OrpholinatController.deleteOrpholinat)

router
    .route('/')
    .get(OrpholinatController.getAllOrpholinat)

module.exports = router;