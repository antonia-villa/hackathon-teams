console.log('Hello from routing.js!')


$('.delete-team').click(function(e){
	e.preventDefault();
	$.ajax({
		url: $(this).attr('href'),
		method: 'DELETE'
	}).done(function(data){
		window.location.href = '/teams';
	});
});

$('.put-form').on('submit', function(e) {
  e.preventDefault();
  var teamElement = $(this);
  
  var teamUrl = teamElement.attr('action');
  var teamData = teamElement.serialize();
  console.log(teamUrl);
  console.log(teamData);
  $.ajax({
    method: 'PUT',
    url: teamUrl,
    data: teamData
  }).done(function(data) {
    // get data returned from the PUT route
    console.log(data);

    // do stuff when the PUT action is complete
    //editTeam(data.name, data.members);
    //teamElement.remove();

    // or, you can redirect to another page
    window.location = '/teams';
  });
});