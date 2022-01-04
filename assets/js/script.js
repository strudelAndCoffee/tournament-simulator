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

var p1 = score();
var p2 = score();
var p3 = score();
var p4 = score();

function groupStage() {
  
  var match = function(group) {

    var groupPoints = [0, 0, 0, 0];
    var groupScores = [p1, p2, p3, p4];
    console.log(group);
    console.log("group scores: " + groupScores);

    for (var i = 0; i < group.length - 2; i++) {

      console.log(group[i] + " - vs. - " + group[i + 1]);
      if (groupScores[i] > groupScores[i + 1]) {
        console.log(group[i] + " wins: " + groupScores[i] + " to " + groupScores[i + 1]);
        groupPoints[i]++;
        groupPoints[i]++;
        groupPoints[i]++;
      } else if (groupScores[i] < groupScores[i + 1]) {
        console.log(group[i + 1] + " wins: " + groupScores[i + 1] + " to " + groupScores[i]);
        groupPoints[i + 1]++;
        groupPoints[i + 1]++;
        groupPoints[i + 1]++;
      } else {
        console.log("the match is a tie: " + groupScores[i] + " and " + groupScores[i + 1]);
        groupPoints[i]++;
        groupPoints[i + 1]++;
      }

      console.log(group[i] + " - vs. - " + group[i + 2]);
      if (groupScores[i] > groupScores[i + 2]) {
        console.log(group[i] + " wins: " + groupScores[i] + " to " + groupScores[i + 2]);
        groupPoints[i]++;
        groupPoints[i]++;
        groupPoints[i]++;
      } else if (groupScores[i] < groupScores[i + 2]) {
        console.log(group[i + 2] + " wins: " + groupScores[i + 2] + " to " + groupScores[i]);
        groupPoints[i + 2]++;
        groupPoints[i + 2]++;
        groupPoints[i + 2]++;
      } else {
        console.log("the match is a tie: " + groupScores[i] + " and " + groupScores[i + 2]);
        groupPoints[i]++;
        groupPoints[i + 2]++;
      }
    }
    console.log(group[3] + " - vs. " + group[0]);
    if (groupScores[3] > groupScores[0]) {
      console.log(group[3] + " wins: " + groupScores[3] + " to " + groupScores[0]);
      groupPoints[3]++;
      groupPoints[3]++;
      groupPoints[3]++;
    } else if (groupScores[3] < groupScores[0]) {
      console.log(group[0] + " wins: " + groupScores[0] + " to " + groupScores[3]);
      groupPoints[0]++;
      groupPoints[0]++;
      groupPoints[0]++;
    } else {
      console.log("the match is a tie: " + groupScores[3] + " and " + groupScores[0]);
      groupPoints[3]++;
      groupPoints[0]++;
    }

    console.log("group points: " + groupPoints);
  }

  match(group1);

};

groupStage();