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

    var group2Aplayer = redPlayers[1];
    var group2Bplayer = greenPlayers[0];
    var group2Ascore = 1;
    var group2Bscore = 0;
    var group2A = group2Aplayer + ": " + group2Ascore;
    var group2B = group2Bplayer + ": " + group2Bscore;

    var group3Aplayer = bluePlayers[0];
    var group3Bplayer = yellowPlayers[1];
    var group3Ascore = 0;
    var group3Bscore = 1;
    var group3A = group3Aplayer + ": " + group3Ascore;
    var group3B = group3Bplayer + ": " + group3Bscore;

    var group4Aplayer = yellowPlayers[0];
    var group4Bplayer = greenPlayers[1];
    var group4Ascore = 0;
    var group4Bscore = 1;
    var group4A = group4Aplayer + ": " + group4Ascore;
    var group4B = group4Bplayer + ": " + group4Bscore;
    
    var group1match = function() {
        window.alert(group1Aplayer + " vs " +  group1Bplayer);

        if (group1Ascore > group1Bscore) {
            window.alert(group1A + " --- " + group1B);
            window.alert(group1Aplayer + " wins the match.");
        
            var group1result = group1Aplayer;
        }
        else {
            window.alert(group1A + " --- " + group1B);
            window.alert(group1Bplayer + " wins the match.");

            var group1result = group1Bplayer;
        }

        var group1winner = group1result;
        console.log("Quarter Final - Group 1 winner: " + group1winner);
    }

    var group2match = function() {
        window.alert(group2Aplayer + " vs " +  group2Bplayer);

        if (group2Ascore > group2Bscore) {
            window.alert(group2A + " --- " + group2B);
            window.alert(group2Aplayer + " wins the match.");
                
            var group2result = group2Aplayer;
        }
        else {
            window.alert(group2A + " --- " + group2B);
            window.alert(group2Bplayer + " wins the match.");
            var group2result = group2Bplayer;
        }
        var group2winner = group2result;
        console.log("Quarter Final - Group 2 winner: " + group2winner);
    }

    var group3match = function() {
        window.alert(group3Aplayer + " vs " +  group3Bplayer);

        if (group3Ascore > group3Bscore) {
            window.alert(group3A + " --- " + group3B);
            window.alert(group3Aplayer + " wins the match.");
                
            var group3result = group3Aplayer;
        }
        else {
            window.alert(group3A + " --- " + group3B);
            window.alert(group3Bplayer + " wins the match.");
            var group3result = group3Bplayer;
        }
        var group3winner = group3result;
        console.log("Quarter Final - Group 3 winner: " + group3winner);
    }

    var group4match = function() {
        window.alert(group4Aplayer + " vs " +  group4Bplayer);

        if (group4Ascore > group4Bscore) {
            window.alert(group4A + " --- " + group4B);
            window.alert(group4Aplayer + " wins the match.");
                
            var group4result = group4Aplayer;
        }
        else {
            window.alert(group4A + " --- " + group4B);
            window.alert(group4Bplayer + " wins the match.");
            var group4result = group4Bplayer;
        }
        var group4winner = group4result;
        console.log("Quarter Final - Group 4 winner: " + group4winner);
    }

    group1match();
    group2match();
    group3match();
    group4match();
};

quarterFinal();
