const {createUser, getAll } = require('../controllers/userController');

const router = require('express').Router();


router.post('/create-user', createUser);
router.get('/all-users, getAll');

module.exports = router