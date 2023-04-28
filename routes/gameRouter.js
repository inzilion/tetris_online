const gameHandler = require('../handlers/game.js');
const express = require('express');
const router = express.Router();

router.get('/single', (req, res)=>{ res.render('game/single/index.html', {user : req.session.user})});
router.get('/Multi', gameHandler.index);

module.exports = router;