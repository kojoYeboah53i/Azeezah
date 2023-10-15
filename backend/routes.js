const router = require('express').Router();
const League = require('./controllers/league');

router.get('/league', League.getLeagueTable);


module.exports = router;