var express = require('express');
var fs = require('fs');
var teamService = require('../models/teamService');
var router = express.Router();

router.get('/', function(req, res) {
  var teams = teamService.allTeams();
  res.render('teams/index', { teams: teams });
});

// Add Teams to page
router.post('/', function(req, res) {
  teamService.addTeam(req.body);

  res.redirect('/teams');
});


router.delete('/:name', function(req, res){
	console.log('Delete route. name = ', req.params.name);
	teamService.deleteTeam(req.params.name)
	// 	console.log('delted = ', deleted);
	res.send('success');

})

router.get('/new', function(req, res) {
  res.render('teams/new');
});

router.get('/:name', function(req, res) {
  // search for the team name in all the teams.
  var team = teamService.getTeam(req.params.name);

  res.render('teams/show', { team: team });
});

module.exports = router;
