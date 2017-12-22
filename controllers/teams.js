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

router.get('/new', function(req, res) {
  res.render('teams/new');
});

router.get('/edit/:name', function(req, res) {
// console.log('edit form');
  var team = teamService.getTeam(req.params.name);
  res.render('teams/edit', { team: team });
});

router.get('/:name', function(req, res) {
  // search for the team name in all the teams.
  var team = teamService.getTeam(req.params.name);

  res.render('teams/show', { team: team });
});

router.put('/:name', function(req, res) {
 teamService.editTeam(req.params.name, req.body);
 //console.log(req.body);
  res.send('PUT ROUTE');
});

router.delete('/:name', function(req, res){
	teamService.deleteTeam(req.params.name)
	res.send('success');

})

module.exports = router;
