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

var redPlayer = [
  {
    name: "Angus",
    type: "red",
    score: function () {
      var value = randomNumber();
      return value;
    },
    points: 0,
    win: function () {
      this.points++;
    },
    rank: 0,
    advRed: 0,
    advBlue: 0,
    advGreen: 0,
    advYellow: 0,
    adv: function (opp) {
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
    },
  },
  {
    name: "Bobby",
    type: "red",
    score: function () {
      var value = randomNumber();
      return value;
    },
    points: 0,
    win: function () {
      this.points++;
    },
    rank: 0,
    advRed: 0,
    advBlue: 0,
    advGreen: 0,
    advYellow: 0,
    adv: function (opp) {
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
    },
  },
  {
    name: "Clara",
    type: "red",
    score: function () {
      var value = randomNumber();
      return value;
    },
    points: 0,
    win: function () {
      this.points++;
    },
    rank: 0,
    advRed: 0,
    advBlue: 0,
    advGreen: 0,
    advYellow: 0,
    adv: function (opp) {
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
    },
  },
  {
    name: "Dorothy",
    type: "red",
    score: function () {
      var value = randomNumber();
      return value;
    },
    points: 0,
    win: function () {
      this.points++;
    },
    rank: 0,
    advRed: 0,
    advBlue: 0,
    advGreen: 0,
    advYellow: 0,
    adv: function (opp) {
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
    },
  },
];
var bluePlayer = [
  {
    name: "Eduardo",
    type: "blue",
    score: function () {
      var value = randomNumber();
      return value;
    },
    points: 0,
    win: function () {
      this.points++;
    },
    rank: 0,
    advRed: 0,
    advBlue: 0,
    advGreen: 0,
    advYellow: 0,
    adv: function (opp) {
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
    },
  },
  {
    name: "Fiona",
    type: "blue",
    score: function () {
      var value = randomNumber();
      return value;
    },
    points: 0,
    win: function () {
      this.points++;
    },
    rank: 0,
    advRed: 0,
    advBlue: 0,
    advGreen: 0,
    advYellow: 0,
    adv: function (opp) {
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
    },
  },
  {
    name: "Gabriella",
    type: "blue",
    score: function () {
      var value = randomNumber();
      return value;
    },
    points: 0,
    win: function () {
      this.points++;
    },
    rank: 0,
    advRed: 0,
    advBlue: 0,
    advGreen: 0,
    advYellow: 0,
    adv: function (opp) {
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
    },
  },
  {
    name: "Hector",
    type: "blue",
    score: function () {
      var value = randomNumber();
      return value;
    },
    points: 0,
    win: function () {
      this.points++;
    },
    rank: 0,
    advRed: 0,
    advBlue: 0,
    advGreen: 0,
    advYellow: 0,
    adv: function (opp) {
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
    },
  },
];
var greenPlayer = [
  {
    name: "Isaac",
    type: "green",
    score: function () {
      var value = randomNumber();
      return value;
    },
    points: 0,
    win: function () {
      this.points++;
    },
    rank: 0,
    advRed: 0,
    advBlue: 0,
    advGreen: 0,
    advYellow: 0,
    adv: function (opp) {
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
    },
  },
  {
    name: "Jezebel",
    type: "green",
    score: function () {
      var value = randomNumber();
      return value;
    },
    points: 0,
    win: function () {
      this.points++;
    },
    rank: 0,
    advRed: 0,
    advBlue: 0,
    advGreen: 0,
    advYellow: 0,
    adv: function (opp) {
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
    },
  },
  {
    name: "Kirk",
    type: "green",
    score: function () {
      var value = randomNumber();
      return value;
    },
    points: 0,
    win: function () {
      this.points++;
    },
    rank: 0,
    advRed: 0,
    advBlue: 0,
    advGreen: 0,
    advYellow: 0,
    adv: function (opp) {
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
    },
  },
  {
    name: "Leonardo",
    type: "green",
    score: function () {
      var value = randomNumber();
      return value;
    },
    points: 0,
    win: function () {
      this.points++;
    },
    rank: 0,
    advRed: 0,
    advBlue: 0,
    advGreen: 0,
    advYellow: 0,
    adv: function (opp) {
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
    },
  },
];
var yellowPlayer = [
  {
    name: "Michelle",
    type: "yellow",
    score: function () {
      var value = randomNumber();
      return value;
    },
    points: 0,
    win: function () {
      this.points++;
    },
    rank: 0,
    advRed: 0,
    advBlue: 0,
    advGreen: 0,
    advYellow: 0,
    adv: function (opp) {
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
    },
  },
  {
    name: "Niles",
    type: "yellow",
    score: function () {
      var value = randomNumber();
      return value;
    },
    points: 0,
    win: function () {
      this.points++;
    },
    rank: 0,
    advRed: 0,
    advBlue: 0,
    advGreen: 0,
    advYellow: 0,
    adv: function (opp) {
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
    },
  },
  {
    name: "Olivia",
    type: "yellow",
    score: function () {
      var value = randomNumber();
      return value;
    },
    points: 0,
    win: function () {
      this.points++;
    },
    rank: 0,
    advRed: 0,
    advBlue: 0,
    advGreen: 0,
    advYellow: 0,
    adv: function (opp) {
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
    },
  },
  {
    name: "Penelope",
    type: "yellow",
    score: function () {
      var value = randomNumber();
      return value;
    },
    points: 0,
    win: function () {
      this.points++;
    },
    rank: 0,
    advRed: 0,
    advBlue: 0,
    advGreen: 0,
    advYellow: 0,
    adv: function (opp) {
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
    },
  },
];

var players = [
  redPlayer[0],
  redPlayer[1],
  redPlayer[2],
  redPlayer[3],
  bluePlayer[0],
  bluePlayer[1],
  bluePlayer[2],
  bluePlayer[3],
  greenPlayer[0],
  greenPlayer[1],
  greenPlayer[2],
  greenPlayer[3],
  yellowPlayer[0],
  yellowPlayer[1],
  yellowPlayer[2],
  yellowPlayer[3],
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
  redPlayer[0].name +
    " - advRed:" +
    redPlayer[0].advRed +
    " - advBlue:" +
    redPlayer[0].advBlue +
    " - advGreen:" +
    redPlayer[0].advGreen +
    " - advYellow:" +
    redPlayer[0].advYellow
);
console.log(
  redPlayer[1].name +
    " - advRed:" +
    redPlayer[1].advRed +
    " - advBlue:" +
    redPlayer[1].advBlue +
    " - advGreen:" +
    redPlayer[1].advGreen +
    " - advYellow:" +
    redPlayer[1].advYellow
);
console.log(
  redPlayer[2].name +
    " - advRed:" +
    redPlayer[2].advRed +
    " - advBlue:" +
    redPlayer[2].advBlue +
    " - advGreen:" +
    redPlayer[2].advGreen +
    " - advYellow:" +
    redPlayer[2].advYellow
);
console.log(
  redPlayer[3].name +
    " - advRed:" +
    redPlayer[3].advRed +
    " - advBlue:" +
    redPlayer[3].advBlue +
    " - advGreen:" +
    redPlayer[3].advGreen +
    " - advYellow:" +
    redPlayer[3].advYellow
);