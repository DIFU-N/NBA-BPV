createAthlete = function(name, teamColor) 
{
    var athlete = {};
    athlete.name = name; 
    athlete.votingResults = null;
    athlete.totalVotes = 0;
    athlete.partyColor = teamColor;

    athlete.tallyUpTotalVotes = function()
    {
      this.totalVotes = 0;

      for (var i = 0; i < this.votingResults.length; i++)
      {
        this.totalVotes = this.totalVotes + this.votingResults[i];
      }
  };
    return athlete;
};

var kevin = createAthlete("Kevin Durant",[36, 35, 35]);
var jimmy = createAthlete("Jimmy Butler", [184, 18, 18]); 
var harden = createAthlete("James Harden",[17, 112, 202]);
var jokic = createAthlete("Nikola Jokic", [40, 155, 126, 0.925]); 
var curry = createAthlete("Stephen Curry",[218, 145, 10]);
var giannis = createAthlete("Giannis Antektokoumpo", [8, 59, 13]); 


kevin.votingResults = [7,35,12,26,27,6,21,35,31,33,32,7,34,6,9,3,15,3,18,28,4,34,19,23,3,2,14,12,25,19,9,8,21,13,16,22,21,7,16,7,8,35,29,36,10,9,35,2,14,31,26,8,8,16,26,28];
jimmy.votingResults = [27,2,33,22,22,20,14,33,2,14,29,22,7,15,16,21,28,15,34,17,26,32,27,2,7,23,16,2,10,15,21,20,1,23,14,13,29,2,29,28,25,34,27,20,21,28,24,7,8,35,16,21,24,30,2,31];
harden.votingResults = [12,30,9,3,2,24,28,36,14,3,9,8,35,33,31,14,6,24,36,1,18,4,18,30,22,6,20,4,25,1,8,9,1,21,34,15,5,30,10,16,20,5,25,9,21,36,15,10,20,8,18,2,30,23,28,17];
jokic.votingResults = [2,16,3,24,15,24,23,11,11,5,18,17,35,2,6,28,32,36,31,36,9,17,12,1,32,12,32,18,10,12,7,8,15,27,4,19,13,7,7,4,5,14,12,10,35,1,31,11,7,11,32,3,17,8,34,8];
curry.votingResults = [18,9,3,13,16,23,32,33,16,27,8,13,14,31,5,10,21,7,6,30,14,30,6,28,29,21,4,30,18,30,13,19,16,1,18,26,32,35,11,36,14,18,18,30,30,34,32,24,28,18,14,8,1,33,22,20];
giannis.votingResults = [12,21,31,24,36,1,22,22,33,12,30,9,7,24,17,16,14,17,10,24,25,5,28,25,24,31,4,5,31,35,8,17,2,16,12,1,19,32,7,8,15,2,10,6,17,18,29,13,36,15,26,7,7,7,27,6];


kevin.votingResults[9] = 1;
jimmy.votingResults[9] = 28;

kevin.votingResults[4] = 17;
jimmy.votingResults[4] = 38;

kevin.votingResults[43] = 11;
jimmy.votingResults[43] = 27;

console.log(kevin.votingResults);
console.log(jimmy.votingResults);
console.log(harden.votingResults);
console.log(jokic.votingResults);
console.log(curry.votingResults);
console.log(giannis.votingResults);


var setStateResults = function(state)
{
     theStates[state].winner = null;

     if (jimmy.votingResults[state] > kevin.votingResults[state] && 
      jimmy.votingResults[state] > harden.votingResults[state] && 
      jimmy.votingResults[state] > jokic.votingResults[state] && 
      jimmy.votingResults[state] > curry.votingResults[state] && 
      jimmy.votingResults[state] > giannis.votingResults[state]) {
        theStates[state].winner = jimmy;
      }  else if (kevin.votingResults[state] > jimmy.votingResults[state] && 
        kevin.votingResults[state] > harden.votingResults[state] && 
        kevin.votingResults[state] > jokic.votingResults[state] && 
        kevin.votingResults[state] > curry.votingResults[state] && 
        kevin.votingResults[state] > giannis.votingResults[state]) {
        theStates[state].winner = kevin;
      } else if (harden.votingResults[state] > kevin.votingResults[state] && 
        harden.votingResults[state] > jimmy.votingResults[state] && 
        harden.votingResults[state] > jokic.votingResults[state] && 
        harden.votingResults[state] > curry.votingResults[state] && 
        harden.votingResults[state] > giannis.votingResults[state]) {
        theStates[state].winner = harden;
      } else if (jokic.votingResults[state] > kevin.votingResults[state] && 
        jokic.votingResults[state] > harden.votingResults[state] && 
        jokic.votingResults[state] > jimmy.votingResults[state] && 
        jokic.votingResults[state] > curry.votingResults[state] && 
        jokic.votingResults[state] > giannis.votingResults[state]) {
        theStates[state].winner = jokic;
      } else if (curry.votingResults[state] > kevin.votingResults[state] && 
        curry.votingResults[state] > harden.votingResults[state] && 
        curry.votingResults[state] > jokic.votingResults[state] && 
        curry.votingResults[state] > jimmy.votingResults[state] && 
        curry.votingResults[state] > giannis.votingResults[state]) {
        theStates[state].winner = curry;
      } else if (giannis.votingResults[state] > kevin.votingResults[state] && 
        giannis.votingResults[state] > harden.votingResults[state] && 
        giannis.votingResults[state] > jokic.votingResults[state] && 
        giannis.votingResults[state] > curry.votingResults[state] && 
        giannis.votingResults[state] > jimmy.votingResults[state]) {
        theStates[state].winner = giannis;
      }

     var stateWinner = theStates[state].winner;

     if (stateWinner !== null)
     {
        theStates[state].rgbColor = stateWinner.partyColor;
     }
     else
     {
        theStates[state].rgbColor = [11,32,57];
    } 

  var stateInfoTable = document.getElementById('stateResults');

  var header = stateInfoTable.children[0];
  var body = stateInfoTable.children[1];

  var stateName = header.children[0].children[0];
  var abbrev = header.children[0].children[1];

  var player1Name = body.children[0].children[0];
  var player2Name = body.children[1].children[0];
  var player3Name = body.children[2].children[0];
  var player4Name = body.children[3].children[0];
  var player5Name = body.children[4].children[0];
  var player6Name = body.children[5].children[0];

  var player1Results = body.children[0].children[1];
  var player2Results = body.children[1].children[1];
  var player3Results = body.children[2].children[1];
  var player4Results = body.children[3].children[1];
  var player5Results = body.children[4].children[1];
  var player6Results = body.children[5].children[1];

  var winnersName = body.children[6].children[1];

  stateName.innerText = theStates[state].nameFull;
  abbrev.innerText = "(" +theStates[state].nameAbbrev + ")";

  player1Name.innerText = jimmy.name;
  player2Name.innerText = kevin.name;
  player3Name.innerText = harden.name;
  player4Name.innerText = jokic.name;
  player5Name.innerText = curry.name;
  player6Name.innerText = giannis.name;

  player1Results.innerText = jimmy.votingResults[state];
  player2Results.innerText = kevin.votingResults[state];
  player3Results.innerText = harden.votingResults[state];
  player4Results.innerText = jokic.votingResults[state];
  player5Results.innerText = curry.votingResults[state];
  player6Results.innerText = giannis.votingResults[state];

  if (theStates[state].winner === null)
  {
    winnersName.innerText = "DRAW";
  }
  else
  {
    winnersName.innerText = theStates[state].winner.name;
  }

};

jimmy.tallyUpTotalVotes();
kevin.tallyUpTotalVotes();
harden.tallyUpTotalVotes();
jokic.tallyUpTotalVotes();
curry.tallyUpTotalVotes();
giannis.tallyUpTotalVotes();

console.log(jimmy.totalVotes);
console.log(kevin.totalVotes);

console.log("jimmy's color is: " + jimmy.partyColor);
console.log("kevin's color is: " + kevin.partyColor);

let winner = "???";
let winnerVotes = "";

if (kevin.totalVotes > jimmy.totalVotes && harden.totalVotes && jokic.totalVotes && curry.totalVotes && giannis.totalVotes) {
  winner = kevin.name;
  winnerVotes = kevin.totalVotes;
} else if (jimmy.totalVotes > kevin.totalVotes && harden.totalVotes && jokic.totalVotes && curry.totalVotes && giannis.totalVotes) {
  winner = jimmy.name;
  winnerVotes = jimmy.totalVotes;
} else if (harden.totalVotes > jimmy.totalVotes && kevin.totalVotes && jokic.totalVotes && curry.totalVotes && giannis.totalVotes) {
  winner = harden.name;  
  winnerVotes = harden.totalVotes;
} else if (jokic.totalVotes > jimmy.totalVotes && harden.totalVotes && kevin.totalVotes && curry.totalVotes && giannis.totalVotes) {
  winner = jokic.name;
  winnerVotes = jokic.totalVotes;
} else if (curry.totalVotes > jimmy.totalVotes && harden.totalVotes && jokic.totalVotes && kevin.totalVotes && giannis.totalVotes) {
  winner = curry.name;
  winnerVotes = curry.totalVotes;  
} else {
  winner = giannis.name;
  winnerVotes = giannis.totalVotes;
}

console.log("AND THE WINNER IS..." + winner + "!!!");

var countryInfoTable = document.getElementById('countryResults');

var row = countryInfoTable.children[0].children[0];
row.children[0].innerText = jimmy.name;
row.children[1].innerText = jimmy.totalVotes;
row.children[2].innerText = kevin.name;
row.children[3].innerText = kevin.totalVotes;
row.children[4].innerText = harden.name;
row.children[5].innerText = harden.totalVotes;
row.children[6].innerText = jokic.name;
row.children[7].innerText = jokic.totalVotes;
row.children[8].innerText = curry.name;
row.children[9].innerText = curry.totalVotes;
row.children[10].innerText = giannis.name;
row.children[11].innerText = giannis.totalVotes;

row.children[12].innerText = "Winner";
row.children[13].innerText = winner + "!!! " +winnerVotes;