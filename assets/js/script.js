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
    this.advRed = 0;
    this.advBlue = 0;
    this.advGreen = 0;
    this.advYellow = 0;
    this.adv = function (opp) {
      switch (opp) {
        case "red":
          this.advRed++;
          break;
        case "blue":
          this.advBlue++;
          break;
        case "green":
          this.advGreen++;
          break;
        case "yellow":
          this.advYellow++;
          break;
        default:
          console.log(this.name + " object: something broke");
          break;
      }
    }
  }
};

var redPlayer1 = new Player("Angus", "red");
var redPlayer2 = new Player("Bobby", "red");
var redPlayer3 = new Player("Clara", "red");
var redPlayer4 = new Player("Dorothy", "red");
var bluePlayer1 = new Player("Eduardo", "blue");
var bluePlayer2 = new Player("Fiona", "blue");
var bluePlayer3 = new Player("Gabriella", "blue");
var bluePlayer4 = new Player("Hector", "blue");
var greenPlayer1 = new Player("Isaac", "green");
var greenPlayer2 = new Player("Jezebel", "green");
var greenPlayer3 = new Player("Kirk", "green");
var greenPlayer4 = new Player("Leonardo", "green");
var yellowPlayer1 = new Player("Michelle", "yellow");
var yellowPlayer2 = new Player("Niles", "yellow");
var yellowPlayer3 = new Player("Olivia", "yellow");
var yellowPlayer4 = new Player("Penelope", "yellow");

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
};
var group2 = {
  name: "Group 2",
  p1: players[4],
  p2: players[5],
  p3: players[6],
  p4: players[7],
};
var group3 = {
  name: "Group 3",
  p1: players[8],
  p2: players[9],
  p3: players[10],
  p4: players[11],
};
var group4 = {
  name: "Group 4",
  p1: players[12],
  p2: players[13],
  p3: players[14],
  p4: players[15],
};

function groupStage(group) {
  console.log("| " + group.name + " |");
  console.log(
    "(" +
      group.p1.name +
      ", " +
      group.p2.name +
      ", " +
      group.p3.name +
      ", " +
      group.p4.name +
      ")"
  );
  console.log("---");

  let round1 = [group.p1, group.p2, "Round 1: "];
  let round2 = [group.p3, group.p4, "Round 2: "];
  let round3 = [group.p1, group.p3, "Round 3: "];
  let round4 = [group.p2, group.p4, "Round 4: "];
  let round5 = [group.p4, group.p1, "Round 5: "];
  let round6 = [group.p3, group.p2, "Round 6: "];

  let groupRound = function (round) {
    let roundNumber = round[2];
    let player1 = round[0].name;
    let player2 = round[1].name;
    let p1score = round[0].score();
    let p2score = round[1].score();
    let p1win = function () {
      round[0].win();
      round[0].win();
      round[0].adv(round[1].type);
    };
    let p2win = function () {
      round[1].win();
      round[1].win();
      round[1].adv(round[0].type);
    };
    let tie = function () {
      round[0].win();
      round[1].win();
    };

    console.log(roundNumber + player1 + " vs. " + player2);

    if (p1score > p2score) {
      console.log("--- " + player1 + " wins " + p1score + " to " + p2score);
      p1win();
    } else if (p1score < p2score) {
      console.log("--- " + player2 + " wins " + p2score + " to " + p1score);
      p2win();
    } else {
      console.log(
        "--- The players tie the round " + p1score + " to " + p2score
      );
      tie();
    }
  };

  groupRound(round1);
  groupRound(round2);
  groupRound(round3);
  groupRound(round4);
  groupRound(round5);
  groupRound(round6);

  let groupResults =
    "| " +
    group.p1.name +
    ": " +
    group.p1.points +
    "| " +
    group.p2.name +
    ": " +
    group.p2.points +
    "| " +
    group.p3.name +
    ": " +
    group.p3.points +
    "| " +
    group.p4.name +
    ": " +
    group.p4.points;
  console.log("---");
  console.log(group.name + " results:");
  console.log(groupResults);
  console.log("__________________________________________");
}

groupStage(group1);
groupStage(group2);
groupStage(group3);
groupStage(group4);

console.log(
  redPlayer4.name +
    " - advRed:" +
    redPlayer4.advRed +
    " - advBlue:" +
    redPlayer4.advBlue +
    " - advGreen:" +
    redPlayer4.advGreen +
    " - advYellow:" +
    redPlayer4.advYellow
);
console.log(
  redPlayer1.name +
    " - advRed:" +
    redPlayer1.advRed +
    " - advBlue:" +
    redPlayer1.advBlue +
    " - advGreen:" +
    redPlayer1.advGreen +
    " - advYellow:" +
    redPlayer1.advYellow
);
console.log(
  redPlayer2.name +
    " - advRed:" +
    redPlayer2.advRed +
    " - advBlue:" +
    redPlayer2.advBlue +
    " - advGreen:" +
    redPlayer2.advGreen +
    " - advYellow:" +
    redPlayer2.advYellow
);
console.log(
  redPlayer3.name +
    " - advRed:" +
    redPlayer3.advRed +
    " - advBlue:" +
    redPlayer3.advBlue +
    " - advGreen:" +
    redPlayer3.advGreen +
    " - advYellow:" +
    redPlayer3.advYellow
);