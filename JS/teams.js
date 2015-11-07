// $.get("http://nflarrest.com/api/v1/team/arrests/NE", function(data) {
//   $( ".data" )
//     .append("Name: " + data[0].Name + " ")
//     .append("Position: " + data[0].Position + " ")
//     .append("Category: " + data[0].Category);
// }, "json" );

var $player = $('.team-list')

$.get("http://nflarrest.com/api/v1/team/arrests/NE", function(player) {
  $.each(player, function(i,player){
    $player.append("<tr><td class='player-name'>" + player.Name + "</td><td class='player-position'>" + player.Position + "</td><td class='player-crime'>" + player.Category + "</td></tr>")
  })
}, "json" );
