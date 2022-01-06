var randomNumber = function () {
  var value = Math.floor(Math.random() * 6) + 1;
  return value;
};
// code sourced by Laurens Holst and ashleedawg from stackoverflow.com: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
var shuffleArray = function(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};

var redPlayer = [
  {
    name: "A-red",
    type: "red",
    score: function() {
      var value = randomNumber();
      return value;
    },
    points: 0,
    rank: 0,
    advRed: 0,
    advBlue: 0,
    advGreen: 0,
    advYellow: 0
  },
  {
    name: "B-red",
    type: "red",
    score: function() {
      var value = randomNumber();
      return value;
    },
    points: 0,
    rank: 0,
    advRed: 0,
    advBlue: 0,
    advGreen: 0,
    advYellow: 0
  },
  {
    name: "C-red",
    type: "red",
    score: function() {
      var value = randomNumber();
      return value;
    },
    points: 0,
    rank: 0,
    advRed: 0,
    advBlue: 0,
    advGreen: 0,
    advYellow: 0
  },
  {
    name: "D-red",
    type: "red",
    score: function() {
      var value = randomNumber();
      return value;
    },
    points: 0,
    rank: 0,
    advRed: 0,
    advBlue: 0,
    advGreen: 0,
    advYellow: 0
  },
];

var bluePlayer = [
  {
    name: "E-blue",
    type: "blue",
    score: function() {
      var value = randomNumber();
      return value;
    },
    points: 0,
    rank: 0,
    advRed: 0,
    advBlue: 0,
    advGreen: 0,
    advYellow: 0
  },
  {
    name: "F-blue",
    type: "blue",
    score: function() {
      var value = randomNumber();
      return value;
    },
    points: 0,
    rank: 0,
    advRed: 0,
    advBlue: 0,
    advGreen: 0,
    advYellow: 0
  },
  {
    name: "G-blue",
    type: "blue",
    score: function() {
      var value = randomNumber();
      return value;
    },
    points: 0,
    rank: 0,
    advRed: 0,
    advBlue: 0,
    advGreen: 0,
    advYellow: 0
  },
  {
    name: "H-blue",
    type: "blue",
    score: function() {
      var value = randomNumber();
      return value;
    },
    points: 0,
    rank: 0,
    advRed: 0,
    advBlue: 0,
    advGreen: 0,
    advYellow: 0
  },
];

var greenPlayer = [
  {
    name: "I-green",
    type: "green",
    score: function() {
      var value = randomNumber();
      return value;
    },
    points: 0,
    rank: 0,
    advRed: 0,
    advBlue: 0,
    advGreen: 0,
    advYellow: 0
  },
  {
    name: "J-green",
    type: "green",
    score: function() {
      var value = randomNumber();
      return value;
    },
    points: 0,
    rank: 0,
    advRed: 0,
    advBlue: 0,
    advGreen: 0,
    advYellow: 0
  },
  {
    name: "K-green",
    type: "green",
    score: function() {
      var value = randomNumber();
      return value;
    },
    points: 0,
    rank: 0,
    advRed: 0,
    advBlue: 0,
    advGreen: 0,
    advYellow: 0
  },
  {
    name: "L-green",
    type: "green",
    score: function() {
      var value = randomNumber();
      return value;
    },
    points: 0,
    rank: 0,
    advRed: 0,
    advBlue: 0,
    advGreen: 0,
    advYellow: 0
  },
];

var yellowPlayer = [
  {
    name: "M-yellow",
    type: "yellow",
    score: function() {
      var value = randomNumber();
      return value;
    },
    points: 0,
    rank: 0,
    advRed: 0,
    advBlue: 0,
    advGreen: 0,
    advYellow: 0
  },
  {
    name: "N-yellow",
    type: "yellow",
    score: function() {
      var value = randomNumber();
      return value;
    },
    points: 0,
    rank: 0,
    advRed: 0,
    advBlue: 0,
    advGreen: 0,
    advYellow: 0
  },
  {
    name: "O-yellow",
    type: "yellow",
    score: function() {
      var value = randomNumber();
      return value;
    },
    points: 0,
    rank: 0,
    advRed: 0,
    advBlue: 0,
    advGreen: 0,
    advYellow: 0
  },
  {
    name: "P-yellow",
    type: "yellow",
    score: function() {
      var value = randomNumber();
      return value;
    },
    points: 0,
    rank: 0,
    advRed: 0,
    advBlue: 0,
    advGreen: 0,
    advYellow: 0
  },
];

function groupStage() {
  let players = [
    redPlayer[0], redPlayer[1], redPlayer[2], redPlayer[3],
    bluePlayer[0],bluePlayer[1],bluePlayer[2],bluePlayer[3],
    greenPlayer[0], greenPlayer[1], greenPlayer[2], greenPlayer[3],
    yellowPlayer[0], yellowPlayer[1], yellowPlayer[2], yellowPlayer[3]
  ];
  shuffleArray(players);

  let group1 = {
    name: "Group 1",
    p1: players[0],
    p2: players[1],
    p3: players[2],
    p4: players[3]
  };
  let group2 = {
    name: "Group 2",
    p1: players[4],
    p2: players[5],
    p3: players[6],
    p4: players[7]
  };
  let group3 = {
    name: "Group 3",
    p1: players[8],
    p2: players[9],
    p3: players[10],
    p4: players[11]
  };
  let group4 = {
    name: "Group 4",
    p1: players[12],
    p2: players[13],
    p3: players[14],
    p4: players[15]
  };

  let groupMatch = function(group) {

    console.log(group.name);

    let round1 = [group.p1, group.p2, "Round 1: "];
    let round2 = [group.p3, group.p4, "Round 2: "];
    let round3 = [group.p1, group.p3, "Round 3: "];
    let round4 = [group.p2, group.p4, "Round 4: "];
    let round5 = [group.p4, group.p1, "Round 5: "];
    let round6 = [group.p3, group.p2, "Round 6: "];

    let groupRound = function(round) {
      let roundNumber = round[2];
      let player1 = round[0].name;
      let player2 = round[1].name;
      let p1score = round[0].score();
      let p2score = round[1].score();

      console.log(roundNumber + player1 + " vs. " + player2);
      
      if (p1score > p2score) {
        console.log("--- " + player1 + " wins " + p1score + " to " + p2score);
      } else if (p1score < p2score) {
        console.log("--- " + player2 + " wins " + p2score + " to " + p1score);
      } else {
        console.log("--- The players tie the round " + p1score + " to " + p2score);
      };
    };

    groupRound(round1);
    groupRound(round2);
    groupRound(round3);
    groupRound(round4);
    groupRound(round5);
    groupRound(round6);
  };

  groupMatch(group1);
  // groupMatch(group2);
  // groupMatch(group3);
  // groupMatch(group4);
};

groupStage();