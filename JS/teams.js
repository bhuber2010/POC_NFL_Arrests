// $.get("http://nflarrest.com/api/v1/team/arrests/NE", function(data) {
//   $( ".data" )
//     .append("Name: " + data[0].Name + " ")
//     .append("Position: " + data[0].Position + " ")
//     .append("Category: " + data[0].Category);
// }, "json" );

var $player = $('.team-list');
var $teamPanel = $('.panel-group')

var $teams = $.get("http://localhost:1337http://nflarrest.com/api/v1/team", function(team) {
              $.each(team, function(i,team){
                $teamPanel.append(
                  "<div class='panel panel-default'><div class='panel-heading' data-id=" + team.Team +
                  "><a><h3 class='panel-title collapsed' data-parent='#accordion' data-toggle='collapse' data-target=#" + team.Team +
                  " href=#" + team.Team + ">" + team.Team + "<span> : </span>" + "<span class='badge'>" + team.arrest_count + "</span></h3></a></div><div id=" + team.Team +
                  " class='panel-collapse collapse'><table class='table table-striped table-responsive team-list'>" +
                  "<thead><th>Name</th><th>Position</th><th>Crime</th><th>Date</th></thead></table></div></div>"
                )
              })
            }, "json" );

$teams.done(function(teamList){
  console.log(teamList[0].Team);
  $.each(teamList, function(t,teamList) {
    $.get("http://localhost:1337http://nflarrest.com/api/v1/team/arrests/" + teamList.Team, function(player) {
      $.each(player, function(p,player){
        $("#" + teamList.Team + " table").append(
          "<tr><td class='player-name'>" + player.Name +
          "</td><td class='player-position'>" + player.Position +
          "</td><td class='player-crime'>" + player.Category +
          "</td><td class='player-date'>" + player.Date +
          "</td></tr>"
        )
      })
      }, "json" );
    })
});
