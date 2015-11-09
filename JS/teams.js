jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
});

// var $player = $('.team-list');
// var $teamsPanel = $('.panel-group');
var teamSource = $('#team-template').html();
// var teamTemplate = Handlebars.compile(team-source);

var playerCrime = "" +
      "<tr>" +
        "<td class='player-name'>{{Name}}</td>" +
        "<td class='player-position'>{{Position}}</td>" +
        "<td class='player-crime'>{{Category}}</td>" +
        "<td class='player-date'>{{Date}}</td>" +
      "</tr>";

var $teams = $.get("http://nflarrest.com/api/v1/team", function(team) {
              // console.log(team[0].Team)
                 var $teams = $(team);
                 $teams.each($teams, function(i,$teams) {
                   $('.panel-group').append(Mustache.render(teamSource, $teams))
                   $.get("http://nflarrest.com/api/v1/team/arrests/" + $teams.Team, function(player) {
                     $.each(player, function(p,player){
                       $('.' + $teams.Team)
                          .append(Mustache.render(playerCrime, player))
                     })
                   }, "json" )

            }, "json" )
