var score = function () {
  var value = Math.round(Math.random() * 5) + 1;
  return value;
};

var redPlayers = ["Red A", "Red B", "Red C", "Red D"];
var bluePlayers = ["Blue E", "Blue F", "Blue G", "Blue H"];
var greenPlayers = ["Green I", "Green J", "Green K", "Green L"];
var yellowPlayers = ["Yellow M", "Yellow N", "Yellow O", "Yellow P"];

var group1 = [redPlayers[0], bluePlayers[1], greenPlayers[2], yellowPlayers[3]];
var group2 = [redPlayers[1], bluePlayers[2], greenPlayers[3], yellowPlayers[0]];
var group3 = [redPlayers[2], bluePlayers[3], greenPlayers[0], yellowPlayers[1]];
var group4 = [redPlayers[3], bluePlayers[0], greenPlayers[1], yellowPlayers[2]];

function groupStage() {
  var match = function (group) {
    var points = [0, 0, 0, 0];
    console.log(group);

    for (var i = 0; i < group.length - 1; i++) {

      var p1 = score();
      var p2 = score();

      console.log(group[i] + ": " + p1 + " - " + group[i + 1] + ": " + p2);
      if (p1 > p2) {
        console.log("---" + group[i] + " wins");
        points[i]++;
        points[i]++;
      } else if (p1 < p2) {
        console.log("---" + group[i + 1] + " wins");
        points[i + 1]++;
        points[i + 1]++;
      } else {
        console.log("--- The players tie");
        points[i]++;
        points[i + 1]++;
      }
    }

    var p1 = score();
    var p2 = score();

    console.log(group[3] + ": " + p1 + " - " + group[0] + ": " + p2);
    if (p1 > p2) {
      console.log("---" + group[3] + " wins");
      points[3]++;
      points[3]++;
    } else if (p1 < p2) {
      console.log("---" + group[0] + " wins");
      points[0]++;
      points[0]++;
    } else {
      console.log("--- The players tie");
      points[3]++;
      points[0]++;
    }

    var p1 = score();
    var p2 = score();

    console.log(group[0] + ": " + p1 + " - " + group[2] + ": " + p2);
    if (p1 > p2) {
      console.log("---" + group[0] + " wins");
      points[0]++;
      points[0]++;
    } else if (p1 < p2) {
      console.log("---" + group[2] + " wins");
      points[2]++;
      points[2]++;
    } else {
      console.log("--- The players tie");
      points[0]++;
      points[2]++;
    }

    var player1 = group[0] + ":(" + points[0] + ") ";
    var player2 = group[1] + ":(" + points[1] + ") ";
    var player3 = group[2] + ":(" + points[2] + ") ";
    var player4 = group[3] + ":(" + points[3] + ") ";
    var standings = [player1, player2, player3, player4];

    console.log("Group standings:");
    console.log(standings);
    console.log("------------------------------------------");
  };

  match(group1);
  match(group2);
  match(group3);
  match(group4);
}

groupStage();
