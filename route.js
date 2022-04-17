//input express router
const express = require('express');
const router = express.Router();

const gameController = require('./controllers/game');
const startGameController = require('./controllers/play-game');
const userController = require("./controllers/user.js");

router.get('/', gameController.index);
router.get('/game', startGameController.index);
router.get('/users', userController.get);
router.get('/user', userController.getById);    //user per id ex:localhost:8000/user?id=1
router.get('/login', userController.loginIndex);
router.post('/login', userController.login);


module.exports = router;