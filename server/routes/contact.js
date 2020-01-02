'use strict'

const express = require('express')
const router = express.Router()
const {ContactController} = require('../controllers/ContactController');

// define the home page route
router.get('/', ContactController.getAllContacts);
router.get('/:id', ContactController.getContactById);
router.post('/add', ContactController.addNewContact);
router.post('/edit/:id', ContactController.editContact);
router.post('/delete/:id', ContactController.deleteContact);

module.exports = router