const Team = require('../models/Teams');


exports.getLeagueTable = async (req, res) => {
    try{

        const teams = await Team.query().select("*").orderBy('totalPoints', 'desc');
        res.json(teams);
    }catch (error) {
        console.log(error);
        res.status(500).send('Server error'); //error
      }

}



