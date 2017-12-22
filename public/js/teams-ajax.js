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
  console.log(teamElement);
  
  var teamUrl = teamElement.attr('href');
  var teamData = teamElement.serialize();
  console.log(teamUrl);
  console.log(teamData);
  $.ajax({
    method: 'PUT',
    url: teamUrl,
    data: teamData
   }).done(function(data){
		window.location.href = '/teams';
	});

});