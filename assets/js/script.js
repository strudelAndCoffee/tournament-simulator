var redPlayers = ["Red A", "Red B"];
var bluePlayers = ["Blue C", "Blue D"];
var greenPlayers = ["Green E", "Green F"];
var yellowPlayers = ["Yellow G", "Yellow H"];

var game = function() {

    var qF1Aplayer = redPlayers[0];
    var qF1Bplayer = bluePlayers[1];
    var qF1Ascore = 1;
    var qF1Bscore = 0;
    var qF1A = qF1Aplayer + ": " + qF1Ascore;
    var qF1B = qF1Bplayer + ": " + qF1Bscore;

    var qF2Aplayer = redPlayers[1];
    var qF2Bplayer = greenPlayers[0];
    var qF2Ascore = 1;
    var qF2Bscore = 0;
    var qF2A = qF2Aplayer + ": " + qF2Ascore;
    var qF2B = qF2Bplayer + ": " + qF2Bscore;

    var qF3Aplayer = bluePlayers[0];
    var qF3Bplayer = yellowPlayers[1];
    var qF3Ascore = 0;
    var qF3Bscore = 1;
    var qF3A = qF3Aplayer + ": " + qF3Ascore;
    var qF3B = qF3Bplayer + ": " + qF3Bscore;

    var qF4Aplayer = yellowPlayers[0];
    var qF4Bplayer = greenPlayers[1];
    var qF4Ascore = 0;
    var qF4Bscore = 1;
    var qF4A = qF4Aplayer + ": " + qF4Ascore;
    var qF4B = qF4Bplayer + ": " + qF4Bscore;
    
    // QUARTER FINAL 1
    window.alert("Quarter Finals")
    window.alert(qF1Aplayer + " - vs. - " +  qF1Bplayer);

    if (qF1Ascore > qF1Bscore) {
        window.alert(qF1A + " --- " + qF1B);
        window.alert(qF1Aplayer + " wins the match.");
        var qF1result = qF1Aplayer;
    }
    else {
        window.alert(qF1A + " --- " + qF1B);
        window.alert(qF1Bplayer + " wins the match.");
        var qF1result = qF1Bplayer;
    }

    var qF1winner = qF1result;
    var qF1score = 1;

    // QUARTER FINAL 2
    window.alert(qF2Aplayer + " - vs. - " +  qF2Bplayer);

    if (qF2Ascore > qF2Bscore) {
        window.alert(qF2A + " --- " + qF2B);
        window.alert(qF2Aplayer + " wins the match.");
        var qF2result = qF2Aplayer;
    }
    else {
        window.alert(qF2A + " --- " + qF2B);
        window.alert(qF2Bplayer + " wins the match.");
        var qF2result = qF2Bplayer;
    }

    var qF2winner = qF2result;
    var qF2score = 1;

    // QUARTER FINAL 3
    window.alert(qF3Aplayer + " - vs. - " +  qF3Bplayer);

    if (qF3Ascore > qF3Bscore) {
        window.alert(qF3A + " --- " + qF3B);
        window.alert(qF3Aplayer + " wins the match.");
        var qF3result = qF3Aplayer;
    }
    else {
        window.alert(qF3A + " --- " + qF3B);
        window.alert(qF3Bplayer + " wins the match.");
        var qF3result = qF3Bplayer;
    }

    var qF3winner = qF3result;
    var qF3score = 0;

    // QUARTER FINAL 4
    window.alert(qF4Aplayer + " - vs. - " +  qF4Bplayer);

    if (qF4Ascore > qF4Bscore) {
        window.alert(qF4A + " --- " + qF4B);
        window.alert(qF4Aplayer + " wins the match.");
        var qF4result = qF4Aplayer;
    }
    else {
        window.alert(qF4A + " --- " + qF4B);
        window.alert(qF4Bplayer + " wins the match.");
        var qF4result = qF4Bplayer;
    }

    var qF4winner = qF4result;
    var qF4score = 0;

    //SEMI FINAL 1
    window.alert("Semi Finals");
    window.alert(qF1winner + " - vs. - " + qF3winner);

    if (qF1score > qF3score) {
        window.alert(qF1winner + ": " + qF1score + " --- " + qF3winner + ": " + qF3score);
        window.alert(qF1winner + " wins the match.");
        var sF1result = qF1winner;
    }
    else {
        window.alert(qF1winner + ": " + qF1score + " --- " + qF3winner + ": " + qF3score);
        window.alert(qF3winner + " wins the match.");
        var sF1result = qF3winner;
    }

    var sF1winner = sF1result;
    var sF1score = 1;

    //SEMI FINAL 2
    window.alert(qF2winner + " - vs. - " + qF4winner);

    if (qF2score > qF4score) {
        window.alert(qF2winner + ": " + qF2score + " --- " + qF4winner + ": " + qF4score);
        window.alert(qF2winner + " wins the match.");
        var sF2result = qF2winner;
    }
    else {
        window.alert(qF2winner + ": " + qF2score + " --- " + qF4winner + ": " + qF4score);
        window.alert(qF4winner + " wins the match.");
        var sF2result = qF4winner;
    }

    var sF2winner = sF2result;
    var sF2score = 0;

    //FINAL
    window.alert("Final Match");
    window.alert(sF1winner + " - vs. - " + sF2winner);

    if (sF1score > sF2score) {
        window.alert(sF1winner + ": " + sF1score + " --- " + sF2winner + ": " + sF2score);
        window.alert(sF1winner + " wins the game!");
        var sF2result = sF1winner;
    }
    else {
        window.alert(sF1winner + ": " + sF1score + " --- " + sF2winner + ": " + sF2score);
        window.alert(sF2winner + " wins the game!");
        var sF2result = sF2winner;
    }
};

game();
