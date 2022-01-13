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
    }
  }
};

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
  var groupPlayers = group.p1.name + ", " + group.p2.name + ", " + group.p3.name + ", " + group.p4.name;
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
  var round1 = [group.p1, group.p2, "Round 1: "];
  var round2 = [group.p3, group.p4, "Round 2: "];
  var round3 = [group.p1, group.p3, "Round 3: "];
  var round4 = [group.p2, group.p4, "Round 4: "];
  var round5 = [group.p4, group.p1, "Round 5: "];
  var round6 = [group.p3, group.p2, "Round 6: "];
  var round7 = [group.p2, group.p1, "Round 7: "];
  var round8 = [group.p4, group.p3, "Round 8: "];
  var round9 = [group.p3, group.p1, "Round 9: "];
  var round10 = [group.p4, group.p2, "Round 10: "];
  var round11 = [group.p1, group.p4, "Round 11: "];
  var round12 = [group.p2, group.p3, "Round 12: "];
  
  // Round simulation
  var groupRound = function (round) {

    var roundNumber = round[2];
    var player1 = round[0].name;
    var player2 = round[1].name;
    var p1score = round[0].score();
    var p2score = round[1].score();
    var roundResults = "";

    var playerAdv = function() {
      let p1type = round[0].type;
      let p1advRed = round[0].Red;
      let p1advBlue = round[0].Blue;
      let p1advGreen = round[0].Green;
      let p1advYellow = round[0].Yellow;
      let p2type = round[1].type;
      let p2advRed = round[1].Red;
      let p2advBlue = round[1].Blue;
      let p2advGreen = round[1].Green;
      let p2advYellow = round[1].Yellow;

      // Player advantage mechanic
      switch(p2type) {
        case "Red":
          if (p1advRed > 2) {
            p1score = round[0].score() + 3;
          } 
          else if (p1advRed > 1) {
            p1score = round[0].score() + 2;
          } 
          else {
            p1score = round[0].score();
          }
          break;
        case "Blue":
          if (p1advBlue > 2) {
            p1score = round[0].score() + 3;
          } 
          else if (p1advBlue > 1) {
            p1score = round[0].score() + 2;
          } 
          else {
            p1score = round[0].score();
          }
          break;
        case "Green":
          if (p1advGreen > 2) {
            p1score = round[0].score() + 3;
          }
          else if (p1advGreen > 1) {
            p1score = round[0].score() + 2;
          }
          else {
            p1score = round[0].score();
          }
          break;
        case "Yellow":
          if (p1advYellow > 2) {
            p1score = round[0].score() + 3;
          }
          else if (p1advYellow > 1) {
            p1score = round[0].score() + 2;
          }
          else {
            p1score = round[0].score();
          }
          break;
        default:
          break;
      }
      switch(p1type) {
        case "Red":
          if (p2advRed > 2) {
            p2score = round[1].score() + 3;
          }
          else if (p2advRed > 1) {
            p2score = round[1].score() + 2;
          }
          else {
            p2score = round[1].score();
          }
          break;
        case "Blue":
          if (p2advBlue > 2) {
            p2score = round[1].score() + 3;
          }
          else if (p2advBlue > 1) {
            p2score = round[1].score() + 2;
          }
          else {
            p2score = round[1].score();
          }
          break;
        case "Green":
          if (p2advGreen > 2) {
            p2score = round[1].score() + 3;
          }
          else if (p2advGreen > 1) {
            p2score = round[1].score() + 2;
          }
          else {
            p2score = round[1].score();
          }
          break;
        case "Yellow":
          if (p2advYellow > 2) {
            p2score = round[1].score() + 3;
          }
          else if (p2advYellow > 1) {
            p2score = round[1].score() + 2;
          }
          else {
            p2score = round[1].score();
          }
          break;
        default:
          break;
      }
    };

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
    var tie = function () {
      round[0].win();
      round[1].win();
    };

    // Round match up display
    var createRoundHeader = function(){

      var roundHeader = roundNumber + player1 + " vs. " + player2;
      var roundHeaderEl = document.createElement("h4");
      roundHeaderEl.className = "round-header";
      roundHeaderEl.textContent = roundHeader;

      groupBoxArea.appendChild(roundHeaderEl);
    };

    // Round results display
    var createRoundInfo = function() {

      var roundResultsEl = document.createElement("p");
      roundResultsEl.className = "round-results";
      roundResultsEl.textContent = roundResults;

      groupBoxArea.appendChild(roundResultsEl);
    };
    
    playerAdv();

    // Round outcome determiner
    if (p1score > p2score) {
      roundResults = player1 + " wins " + p1score + " to " + p2score;
      p1win();
    } else if (p1score < p2score) {
      roundResults = player2 + " wins " + p2score + " to " + p1score;
      p2win();
    } else {
      roundResults = "The players tie the round " + p1score + " to " + p2score;
      tie();
    }

    createRoundHeader();
    createRoundInfo();
  };

  groupRound(round1);
  groupRound(round2);
  groupRound(round3);
  groupRound(round4);
  groupRound(round5);
  groupRound(round6);
  groupRound(round7);
  groupRound(round8);
  groupRound(round9);
  groupRound(round10);
  groupRound(round11);
  groupRound(round12);

  // Group outcome info
  var groupPoints = [
    group.p1.points + ": " + group.p1.name,
    group.p2.points + ": " + group.p2.name,
    group.p3.points + ": " + group.p3.name,
    group.p4.points + ": " + group.p4.name
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

groupStage(group1);
groupStage(group2);
groupStage(group3);
groupStage(group4);

for (var i = 0; i < (players.length - 1); i++) {
  sessionStorage.setItem("name:player" + [i], players[i].name);
  sessionStorage.setItem("type:player" + [i], players[i].type);
  sessionStorage.setItem("points:player" + [i], players[i].points);
  sessionStorage.setItem("Red:player" + [i], players[i].Red);
  sessionStorage.setItem("Blue:player" + [i], players[i].Blue);
  sessionStorage.setItem("Green:player" + [i], players[i].Green);
  sessionStorage.setItem("Yellow:player" + [i], players[i].Yellow);
}

var playerSelect = function() {
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
    sessionStorage.getItem("Yellow:player" + x)
  ];
  var value = playerStats.join(" ");
  
  console.log(value);
};