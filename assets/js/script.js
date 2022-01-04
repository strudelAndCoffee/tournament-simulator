var redPlayers = ["Red A", "Red B", "Red C", "Red D"];
var bluePlayers = ["Blue E", "Blue F", "Blue G", "Blue H"];
var greenPlayers = ["Green I", "Green J", "Green K", "Green L"];
var yellowPlayers = ["Yellow M", "Yellow N", "Yellow O", "Yellow P"];

var groupSize = 4;

var group1 = [redPlayers[0], bluePlayers[1], greenPlayers[2], yellowPlayers[3]];
var group2 = [redPlayers[1], bluePlayers[2], greenPlayers[3], yellowPlayers[0]];
var group3 = [redPlayers[2], bluePlayers[3], greenPlayers[0], yellowPlayers[1]];
var group4 = [redPlayers[3], bluePlayers[0], greenPlayers[1], yellowPlayers[2]];

var groupStage = function () {
  var points = [0, 0, 0, 0];
  var W = 1;
  var L = 0;
  var rounds = [r1, r2, r3];

  var groupMatches = function (group) {

    points = [0, 0, 0, 0];
    console.log(group);
    for (var i = 0; i <= rounds.length; i++) {
      if (r1[i] == 1) {
        points[i]++;
      }
    }
    console.log("points after round 1: " + points);

    for (var i = 0; i <= rounds.length; i++) {
      if (r2[i] == 1) {
        points[i]++;
      }
    }
    console.log("points after round 2: " + points);

    for (var i = 0; i <= rounds.length; i++) {
      if (r3[i] == 1) {
        points[i]++;
      }
    }
    console.log("points after round 3: " + points);

    for (var i = 0; i < group.length; i++) {
      group[i] = group[i] + ": " + points[i];
    }

    console.log("standings: " + group);
  };

  var r1 = [W, L, W, L];
  var r2 = [L, W, L, W];
  var r3 = [W, L, L, W];

  groupMatches(group1);

  var r1 = [L, L, L, L];
  var r2 = [L, W, L, W];
  var r3 = [W, W, W, W];

  groupMatches(group2);

  var r1 = [W, W, W, W];
  var r2 = [W, W, L, L];
  var r3 = [W, L, W, W];

  groupMatches(group3);

  var r1 = [L, L, W, W];
  var r2 = [W, W, W, L];
  var r3 = [L, L, W, W];

  groupMatches(group4);
};

groupStage();

console.log("group1: " + group1);
console.log("group2: " + group2);
console.log("group3: " + group3);
console.log("group4: " + group4);

//  // Group 1
//console.log("Group 1 - Matches:");
//for (var i = 0; i < groupSize; i++) {
//  if (i < groupSize - 2) {
//    console.log(group1[i] + " vs. " + group1[i + 1]);
//    console.log(group1[i] + " vs. " + group1[i + 2]);
//  } else if (i == groupSize - 2) {
//    console.log(group1[i] + " vs. " + group1[i + 1]);
//  } else {
//    console.log(group1[i] + " vs. " + group1[0]);
//  }
//}
//
//console.log("Group 1 - Results:");
//
//  // Group 2
//console.log("Group 2 - Matches:");
//for (var i = 0; i < groupSize; i++) {
//  if (i < groupSize - 2) {
//    console.log(group2[i] + " vs. " + group2[i + 1]);
//    console.log(group2[i] + " vs. " + group2[i + 2]);
//  } else if (i == groupSize - 2) {
//    console.log(group2[i] + " vs. " + group2[i + 1]);
//  } else {
//    console.log(group2[i] + " vs. " + group2[0]);
//  }
//}
//
//  // Group 3
//console.log("Group 3 - Matches:");
//for (var i = 0; i < groupSize; i++) {
//  if (i < groupSize - 2) {
//    console.log(group3[i] + " vs. " + group3[i + 1]);
//    console.log(group3[i] + " vs. " + group3[i + 2]);
//  } else if (i == groupSize - 2) {
//    console.log(group3[i] + " vs. " + group3[i + 1]);
//  } else {
//    console.log(group3[i] + " vs. " + group3[0]);
//  }
//}
//
//  // Group 4
//console.log("Group 4 - Matches:");
//for (var i = 0; i < groupSize; i++) {
//  if (i < groupSize - 2) {
//    console.log(group4[i] + " vs. " + group4[i + 1]);
//    console.log(group4[i] + " vs. " + group4[i + 2]);
//  } else if (i == groupSize - 2) {
//    console.log(group4[i] + " vs. " + group4[i + 1]);
//  } else {
//    console.log(group4[i] + " vs. " + group4[0]);
//  }
//}

//var redPlayers = ["Red A", "Red B"];
//var bluePlayers = ["Blue C", "Blue D"];
//var greenPlayers = ["Green E", "Green F"];
//var yellowPlayers = ["Yellow G", "Yellow H"];
//
//var game = function() {
//
//    var qf1Aplayer = redPlayers[0];
//    var qf1Bplayer = bluePlayers[1];
//    var qf1Ascore = 1;
//    var qf1Bscore = 0;
//    var qf1A = qf1Aplayer + ": " + qf1Ascore;
//    var qf1B = qf1Bplayer + ": " + qf1Bscore;
//
//    var qf2Aplayer = redPlayers[1];
//    var qf2Bplayer = greenPlayers[0];
//    var qf2Ascore = 1;
//    var qf2Bscore = 0;
//    var qf2A = qf2Aplayer + ": " + qf2Ascore;
//    var qf2B = qf2Bplayer + ": " + qf2Bscore;
//
//    var qf3Aplayer = bluePlayers[0];
//    var qf3Bplayer = yellowPlayers[1];
//    var qf3Ascore = 0;
//    var qf3Bscore = 1;
//    var qf3A = qf3Aplayer + ": " + qf3Ascore;
//    var qf3B = qf3Bplayer + ": " + qf3Bscore;
//
//    var qf4Aplayer = yellowPlayers[0];
//    var qf4Bplayer = greenPlayers[1];
//    var qf4Ascore = 0;
//    var qf4Bscore = 1;
//    var qf4A = qf4Aplayer + ": " + qf4Ascore;
//    var qf4B = qf4Bplayer + ": " + qf4Bscore;
//
//    // QUARTER FINAL 1
//    console.log("Quarter Finals")
//    console.log("Round 1: " + qf1Aplayer + " - vs. - " +  qf1Bplayer);
//
//    if (qf1Ascore > qf1Bscore) {
//        console.log("Score: " + qf1A + " --- " + qf1B);
//        console.log(qf1Aplayer + " wins the match.");
//        var qf1result = qf1Aplayer;
//    }
//    else {
//        console.log("Score: " + qf1A + " --- " + qf1B);
//        console.log(qf1Bplayer + " wins the match.");
//        var qf1result = qf1Bplayer;
//    }
//
//    var qf1winner = qf1result;
//    var qf1score = 1;
//
//    // QUARTER FINAL 2
//    console.log("Round 2: " + qf2Aplayer + " - vs. - " +  qf2Bplayer);
//
//    if (qf2Ascore > qf2Bscore) {
//        console.log("Score: " + qf2A + " --- " + qf2B);
//        console.log(qf2Aplayer + " wins the match.");
//        var qf2result = qf2Aplayer;
//    }
//    else {
//        console.log("Score: " + qf2A + " --- " + qf2B);
//        console.log(qf2Bplayer + " wins the match.");
//        var qf2result = qf2Bplayer;
//    }
//
//    var qf2winner = qf2result;
//    var qf2score = 1;
//
//    // QUARTER FINAL 3
//    console.log("Round 3: " + qf3Aplayer + " - vs. - " +  qf3Bplayer);
//
//    if (qf3Ascore > qf3Bscore) {
//        console.log("Score: " + qf3A + " --- " + qf3B);
//        console.log(qf3Aplayer + " wins the match.");
//        var qf3result = qf3Aplayer;
//    }
//    else {
//        console.log("Score: " + qf3A + " --- " + qf3B);
//        console.log(qf3Bplayer + " wins the match.");
//        var qf3result = qf3Bplayer;
//    }
//
//    var qf3winner = qf3result;
//    var qf3score = 0;
//
//    // QUARTER FINAL 4
//    console.log("Round 4: " + qf4Aplayer + " - vs. - " +  qf4Bplayer);
//
//    if (qf4Ascore > qf4Bscore) {
//        console.log("Score: " + qf4A + " --- " + qf4B);
//        console.log(qf4Aplayer + " wins the match.");
//        var qf4result = qf4Aplayer;
//    }
//    else {
//        console.log("Score: " + qf4A + " --- " + qf4B);
//        console.log(qf4Bplayer + " wins the match.");
//        var qf4result = qf4Bplayer;
//    }
//
//    var qf4winner = qf4result;
//    var qf4score = 0;
//
//    //SEMI FINAL 1
//    console.log("Semi Finals");
//    console.log("Round 1: " + qf1winner + " - vs. - " + qf3winner);
//
//    if (qf1score > qf3score) {
//        console.log("Score: " + qf1winner + ": " + qf1score + " --- " + qf3winner + ": " + qf3score);
//        console.log(qf1winner + " wins the match.");
//        var sf1result = qf1winner;
//    }
//    else {
//        console.log("Score: " + qf1winner + ": " + qf1score + " --- " + qf3winner + ": " + qf3score);
//        console.log(qf3winner + " wins the match.");
//        var sf1result = qf3winner;
//    }
//
//    var sf1winner = sf1result;
//    var sf1score = 1;
//
//    //SEMI FINAL 2
//    console.log("Round 2: " + qf2winner + " - vs. - " + qf4winner);
//
//    if (qf2score > qf4score) {
//        console.log("Score: " + qf2winner + ": " + qf2score + " --- " + qf4winner + ": " + qf4score);
//        console.log(qf2winner + " wins the match.");
//        var sf2result = qf2winner;
//    }
//    else {
//        console.log("Score: " + qf2winner + ": " + qf2score + " --- " + qf4winner + ": " + qf4score);
//        console.log(qf4winner + " wins the match.");
//        var sf2result = qf4winner;
//    }
//
//    var sf2winner = sf2result;
//    var sf2score = 0;
//
//    //FINAL
//    console.log("Final Match");
//    console.log(sf1winner + " - vs. - " + sf2winner);
//
//    if (sf1score > sf2score) {
//        console.log("Score: " + sf1winner + ": " + sf1score + " --- " + sf2winner + ": " + sf2score);
//        console.log(sf1winner + " wins the game!");
//        var sf2result = sf1winner;
//    }
//    else {
//        console.log("Score: " + sf1winner + ": " + sf1score + " --- " + sf2winner + ": " + sf2score);
//        console.log(sf2winner + " wins the game!");
//        var sf2result = sf2winner;
//    }
//};
//
//game();
