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

class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.score = function () {
      var value = randomNumber();
      return value;
    };
    this.points = 0;
    this.win = function () {
      this.points++;
    };
    this.rank = 0;
    this.Red = 0;
    this.Blue = 0;
    this.Green = 0;
    this.Yellow = 0;
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
          console.log(this.name + " object: something broke");
          break;
      }
    };
  }
}

var redPlayer1 = new Player("Angus", "Red");
var redPlayer2 = new Player("Bobby", "Red");
var redPlayer3 = new Player("Clara", "Red");
var redPlayer4 = new Player("Dorothy", "Red");
var bluePlayer1 = new Player("Eduardo", "Blue");
var bluePlayer2 = new Player("Fiona", "Blue");
var bluePlayer3 = new Player("Gabriella", "Blue");
var bluePlayer4 = new Player("Hector", "Blue");
var greenPlayer1 = new Player("Isaac", "Green");
var greenPlayer2 = new Player("Jezebel", "Green");
var greenPlayer3 = new Player("Kirk", "Green");
var greenPlayer4 = new Player("Leonardo", "Green");
var yellowPlayer1 = new Player("Michelle", "Yellow");
var yellowPlayer2 = new Player("Niles", "Yellow");
var yellowPlayer3 = new Player("Olivia", "Yellow");
var yellowPlayer4 = new Player("Penelope", "Yellow");

var players = [
  redPlayer1,
  redPlayer2,
  redPlayer3,
  redPlayer4,
  bluePlayer1,
  bluePlayer2,
  bluePlayer3,
  bluePlayer4,
  greenPlayer1,
  greenPlayer2,
  greenPlayer3,
  greenPlayer4,
  yellowPlayer1,
  yellowPlayer2,
  yellowPlayer3,
  yellowPlayer4,
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

function groupStage(group) {
  // Group header
  var groupPlayers =
    group.p1.name +
    ", " +
    group.p2.name +
    ", " +
    group.p3.name +
    ", " +
    group.p4.name;
  var groupHeader = group.id + "players";
  JSON.stringify(groupHeader);
  var groupBoxHeader = document.getElementById(groupHeader);
  groupBoxHeader.textContent = groupPlayers;

  // Group footer
  var groupFooter = group.id + "footer";
  JSON.stringify(groupFooter);
  var groupBoxFooter = document.getElementById(groupFooter);

  // Group main box area
  var groupInfo = group.id + "info";
  JSON.stringify(groupInfo);
  var groupBoxArea = document.getElementById(groupInfo);

  // Group matchups
  var round1 = [group.p1, group.p2, group.p3, group.p4, "Round 1: "];
  var round2 = [group.p1, group.p3, group.p2, group.p4, "Round 2: "];
  var round3 = [group.p4, group.p1, group.p3, group.p2, "Round 3: "];
  var round4 = [group.p2, group.p1, group.p4, group.p3, "Round 4: "];
  var round5 = [group.p3, group.p1, group.p4, group.p2, "Round 5: "];
  var round6 = [group.p1, group.p4, group.p2, group.p3, "Round 6: "];

  // Round simulation
  var groupRound = function (round) {
    var roundNumber = round[4];
    var player1 = round[0].name;
    var player2 = round[1].name;
    var player3 = round[2].name;
    var player4 = round[3].name;
    var p1score = round[0].score();
    var p2score = round[1].score();
    var p3score = round[2].score();
    var p4score = round[3].score();
    var match1Scores =
      player1 + ": " + p1score + " --- " + p2score + " :" + player2;
    var match1Results = "";
    var match2Scores =
      player3 + ": " + p3score + " --- " + p4score + " :" + player4;
    var match2Results = "";
    var roundItemEl = document.createElement("article");
    roundItemEl.className = "round-item";

    // Round outcome mechanics
    var p1win = function () {
      round[0].win();
      round[0].win();
      if (p1score >= 5 && p2score <= 2) {
        round[0].adv(round[1].type);
      }
    };
    var p2win = function () {
      round[1].win();
      round[1].win();
      if (p2score >= 5 && p1score <= 2) {
        round[1].adv(round[0].type);
      }
    };
    var p12tie = function () {
      round[0].win();
      round[1].win();
    };
    var p3win = function () {
      round[2].win();
      round[2].win();
      if (p3score >= 5 && p4score <= 2) {
        round[2].adv(round[3].type);
      }
    };
    var p4win = function () {
      round[3].win();
      round[3].win();
      if (p4score >= 5 && p3score <= 2) {
        round[3].adv(round[2].type);
      }
    };
    var p34tie = function () {
      round[2].win();
      round[3].win();
    };

    // Round match up display
    var createRoundHeader = function () {
      var roundHeader = roundNumber;
      var roundHeaderEl = document.createElement("h4");
      roundHeaderEl.className = "round-header1";
      roundHeaderEl.textContent = roundHeader;

      roundItemEl.appendChild(roundHeaderEl);
    };
    var createMatch1Header = function () {
      var match1Players = player1 + " vs. " + player2;
      var match1PlayersEl = document.createElement("h4");
      match1PlayersEl.className = "round-header2";
      match1PlayersEl.textContent = match1Players;

      roundItemEl.appendChild(match1PlayersEl);
    };
    var createMatch2Header = function () {
      var match2Players = player3 + " vs. " + player4;
      var match2PlayersEl = document.createElement("h4");
      match2PlayersEl.className = "round-header2";
      match2PlayersEl.textContent = match2Players;

      roundItemEl.appendChild(match2PlayersEl);
    };

    // Round results display
    var createMatch1Info = function () {
      var match1ResultsEl = document.createElement("p");
      match1ResultsEl.className = "round-results";
      match1ResultsEl.innerHTML = match1Scores + "<br />" + match1Results;

      roundItemEl.appendChild(match1ResultsEl);
    };
    var createMatch2Info = function () {
      var match2ResultsEl = document.createElement("p");
      match2ResultsEl.className = "round-results";
      match2ResultsEl.innerHTML = match2Scores + "<br />" + match2Results;

      roundItemEl.appendChild(match2ResultsEl);
    };

    createRoundHeader();

    // Round outcome determiner
    var match = function () {
      createMatch1Header();

      for (var i = 3; i > 0; i--) {
        if (p1score > p2score) {
          match1Results = player1 + " wins.";
          p1win();
        } else if (p1score < p2score) {
          match1Results = player2 + " wins.";
          p2win();
        } else {
          match1Results = player1 + " and " + player2 + " tie the round.";
          p12tie();
        }
        createMatch1Info();
      }

      createMatch2Header();

      for (var i = 3; i > 0; i--) {
        if (p3score > p4score) {
          match2Results = player3 + " wins.";
          p3win();
        } else if (p3score < p4score) {
          match2Results = player4 + " wins.";
          p4win();
        } else {
          match2Results = player3 + " and " + player4 + " tie the round.";
          p34tie();
        }
        createMatch2Info();
      }
    };
    match();
    groupBoxArea.appendChild(roundItemEl);
  };

  groupRound(round1);
  groupRound(round2);
  groupRound(round3);
  groupRound(round4);
  groupRound(round5);
  groupRound(round6);

  // Group outcome info
  var groupPoints = [
    group.p1.points + ": " + group.p1.name,
    group.p2.points + ": " + group.p2.name,
    group.p3.points + ": " + group.p3.name,
    group.p4.points + ": " + group.p4.name,
  ];
  groupPoints.sort();

  var groupResults =
    groupPoints[3] +
    " | " +
    groupPoints[2] +
    " | " +
    groupPoints[1] +
    " | " +
    groupPoints[0];

  // Group outcome footer
  groupBoxFooter.textContent = groupResults;
}

for (var i = 0; i < players.length - 1; i++) {
  sessionStorage.setItem("name:player" + [i], players[i].name);
  sessionStorage.setItem("type:player" + [i], players[i].type);
  sessionStorage.setItem("points:player" + [i], players[i].points);
  sessionStorage.setItem("Red:player" + [i], players[i].Red);
  sessionStorage.setItem("Blue:player" + [i], players[i].Blue);
  sessionStorage.setItem("Green:player" + [i], players[i].Green);
  sessionStorage.setItem("Yellow:player" + [i], players[i].Yellow);
}

var playerSelect = function () {
  var x = window.prompt("Enter player number to review player stats");
  var playerStats = [
    "Name:",
    sessionStorage.getItem("name:player" + x),
    "| Type:",
    sessionStorage.getItem("type:player" + x),
    "| Points:",
    sessionStorage.getItem("points:player" + x),
    "| Adv. Red:",
    sessionStorage.getItem("Red:player" + x),
    "| Adv. Blue:",
    sessionStorage.getItem("Blue:player" + x),
    "| Adv. Green:",
    sessionStorage.getItem("Green:player" + x),
    "| Adv. Yellow:",
    sessionStorage.getItem("Yellow:player" + x),
  ];
  var value = playerStats.join(" ");

  console.log(value);
};

function simulateTournament() {
  var answer = window.confirm("Run Group Stage Simulation?");

  if (!answer) {
    return;
  } else {
    groupStage(group1);
    groupStage(group2);
    groupStage(group3);
    groupStage(group4);
  }
}

simulateTournament();
