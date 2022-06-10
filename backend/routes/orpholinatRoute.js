const Orpholinat = require('../models/OrpholinatModel')
const express = require('express')
const router = express.Router()
const OrpholinatController = require('../controllers/orpholinatController');

router
    .route('/create')
    .post(OrpholinatController.addOrpholinat)

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