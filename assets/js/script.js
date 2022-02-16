// code sourced for The University of Texas Code Boot Camp coursework
var randomNumber = function () {
  var value = Math.floor(Math.random() * 6) + 1;
  return value;
};
// code sourced by Laurens Holst and ashleedawg from stackoverflow.com: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
var shuffleArray = function (array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};

var roundResults = [];
var matchResults = [];

// Player object and Groups
class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.gamesWon = 0;
    this.gamesLost = 0;
    this.gamesTied = 0;
    this.score = function () {
      var value = randomNumber();
      return value;
    };
    this.win = function () {
      this.gamesWon++;
    };
    this.lose = function () {
      this.gamesLost--;
    };
    this.tie = function () {
      this.gamesTied++;
    };
    this.rank = 0;
    this.Red = 0;
    this.Blue = 0;
    this.Green = 0;
    this.Yellow = 0;
    this.oppAdv = [];
    this.adv = function (opp) {
      switch (opp) {
        case "Red":
          this.Red++;
          break;
        case "Blue":
          this.Blue++;
          break;
        case "Green":
          this.Green++;
          break;
        case "Yellow":
          this.Yellow++;
          break;
        default:
          this.oppAdv.push(opp.name);
          break;
      }
    };
  }
}

var player1 = new Player("Angus", "Red");
var player2 = new Player("Bobby", "Red");
var player3 = new Player("Clara", "Red");
var player4 = new Player("Dorothy", "Red");
var player5 = new Player("Eduardo", "Blue");
var player6 = new Player("Fiona", "Blue");
var player7 = new Player("Gabriella", "Blue");
var player8 = new Player("Hector", "Blue");
var player9 = new Player("Isaac", "Green");
var player10 = new Player("Jezebel", "Green");
var player11 = new Player("Kirk", "Green");
var player12 = new Player("Leonardo", "Green");
var player13 = new Player("Michelle", "Yellow");
var player14 = new Player("Niles", "Yellow");
var player15 = new Player("Olivia", "Yellow");
var player16 = new Player("Penelope", "Yellow");

var players = [
  player1,
  player2,
  player3,
  player4,
  player5,
  player6,
  player7,
  player8,
  player9,
  player10,
  player11,
  player12,
  player13,
  player14,
  player15,
  player16,
];
shuffleArray(players);

var group1 = {
  name: "Group 1",
  p1: players[0],
  p2: players[1],
  p3: players[2],
  p4: players[3],
  id: "group-1-",
};
var group2 = {
  name: "Group 2",
  p1: players[4],
  p2: players[5],
  p3: players[6],
  p4: players[7],
  id: "group-2-",
};
var group3 = {
  name: "Group 3",
  p1: players[8],
  p2: players[9],
  p3: players[10],
  p4: players[11],
  id: "group-3-",
};
var group4 = {
  name: "Group 4",
  p1: players[12],
  p2: players[13],
  p3: players[14],
  p4: players[15],
  id: "group-4-",
};

var runGroupStage = function (group) {
  var match1 = [group.p1, group.p2, group.p3, group.p4, 1];
  var match2 = [group.p1, group.p3, group.p2, group.p4, 2];
  var match3 = [group.p4, group.p1, group.p3, group.p2, 3];
  var match4 = [group.p2, group.p1, group.p4, group.p3, 4];
  var match5 = [group.p3, group.p1, group.p4, group.p2, 5];
  var match6 = [group.p1, group.p4, group.p2, group.p3, 6];
  var groupMatches = [match1, match2, match3, match4, match5, match6];

  for (var i = 0; i < groupMatches.length; i++) {
    var currentMatch = groupMatches[i];
    runGroupMatches(currentMatch);
  }
};

var runGroupMatches = function (match) {
  var matchNumBroadcast = "--Match " + match[4] + ": ";
  var matchId = "m" + match[4];
  var player1 = match[0];
  var player2 = match[1];
  var player3 = match[2];
  var player4 = match[3];
  console.log(matchNumBroadcast);
  console.log(player1.name, player2.name, player3.name, player4.name);

  runMatch(player1, player2, matchId);
  runMatch(player3, player4, matchId);
};

var runMatch = function (p1, p2, m) {
  let round1 = [p1, p2, 1, m];
  let round2 = [p2, p1, 2, m];

  runRound(round1);
  runRound(round2);
};

var runRound = function (round) {
  let p1 = round[0];
  let p2 = round[1];
  let p1score = round[0].score();
  let p2score = round[1].score();
  let roundNum = "Round " + round[2] + "--- ";
  let roundId = "r" + round[2];
  let matchId = round[3];
  let roundOutcome = [];
  let roundOutcomeBroadcast = "";

  if (p1score > p2score) {
    p1.win();
    p2.lose();
    roundOutcomeBroadcast = roundNum + p1.name + " wins: " + p1score + " to " + p2score;
    roundOutcome.push(matchId, roundId, p1, 1, p2);
    if (p1score >= 5 && p2score <= 2) {
      p1.adv(p2);
    }
  } else if (p2score > p1score) {
    p2.win();
    p1.lose();
    roundOutcomeBroadcast = roundNum + p2.name + " wins: " + p2score + " to " + p1score;
    roundOutcome.push(matchId, roundId, p2, 1, p1);
    if (p2score >= 5 && p1score <= 2) {
      p2.adv(p1);
    }
  } else if (p1score === p2score) {
    p1.tie();
    p2.tie();
    roundOutcomeBroadcast = roundNum + p1.name + " ties " + p2.name + ": " + p1score + " to " + p2score;
    roundOutcome.push(matchId, roundId, p1, 0, p2);
  }

  roundResults.push(roundOutcome);
  console.log(roundOutcomeBroadcast);
};

var calculateResults = function() {

  let matchWinners = [];
  let matchTies = [];

  for (var i = 0; i < roundResults.length; i++) {

    if (i % 2 !== 0) {
      let r1 = roundResults[i -1];
      let r2 = roundResults[i];
      let matchNum = r1[0];
      let p1 = r1[2];
      let p2 = r1[4];
      let r1w = r1[3];
      let r2w = r2[3];
      
      if (r1w === 0 && r2w === 0) {
        matchTies.push(matchNum, p1.name, p2.name);
      }
      else if (r1w === 1 && r2w === 0) {
        runTieBreaker(matchNum, p1, p2, p1);
      }
      else if (r1w === 0 && r2w === 1) {
        runTieBreaker(matchNum, p1, p2, p2);
      }
      else if (p1 === r2[4]) {
        runTieBreaker(matchNum, p1, p2, 0);
      }
      else if (p1 === r2[2]) {
        matchWinners.push(matchNum, p1.name);
      }
      else if (p2 === r2[2]) {
        matchWinners.push(matchNum, p2.name);
      }
    }

  }

  matchWinners.unshift("won the match:");
  matchTies.unshift("tied the match:");
  matchResults.push(matchWinners, matchTies);
  matchWinners = [];
  matchTies = [];
}

var runTieBreaker = function (m, p1, p2, adv) {
  let round = [m, p1, p2, adv];
  console.log(round);
  console.log("round 3: tie breaker");
};

runGroupStage(group1);
calculateResults();
console.log(matchResults);