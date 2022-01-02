var redPlayers = ["Red A", "Red B"];
var bluePlayers = ["Blue C", "Blue D"];
var greenPlayers = ["Green E", "Green F"];
var yellowPlayers = ["Yellow G", "Yellow H"];

var quarterFinal = function() {

    var group1Aplayer = redPlayers[0];
    var group1Bplayer = bluePlayers[1];
    var group1Ascore = 1;
    var group1Bscore = 0;
    var group1A = group1Aplayer + ": " + group1Ascore;
    var group1B = group1Bplayer + ": " + group1Bscore;
    

    window.alert(group1Aplayer + " vs " +  group1Bplayer);


    if (group1Ascore > group1Bscore) {
        window.alert(group1A + " --- " + group1B);
        window.alert(group1Aplayer + " wins the match.");
        
        var group1result = group1Aplayer;
        break;
    }
    else {
        window.alert(group1A + " --- " + group1B);
        window.alert(group1Bplayer + " wins the match.");

        var group1result = group1Bplayer;
        break;
    }

    var group1winner = group1result;
};

quarterFinal();