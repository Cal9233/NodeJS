const express = require('express');
const router = express.Router();
const {getBootCamp, getBootCampById, addBootCamp, updateBootCamp, deleteBootCamp} = require('../controllers/bootcamp');

router
    .route('/')
    .get(getBootCamp)
    .post(addBootCamp);

router
    .route('/:id')
    .get(getBootCampById)
    .put(updateBootCamp)
    .delete(deleteBootCamp);

module.exports = router;