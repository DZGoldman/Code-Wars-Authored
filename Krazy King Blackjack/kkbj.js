/*
https://www.codewars.com/kata/57bb798756449dea77000020
Krazy King BlackJack is just like blackjack, with one difference: the kings!
Instead of the kings being simply worth 10 points, kings are either either 10 points or some other number of points announced by the dealer at the start of the game. Whichever value yields the best hand is the one that plays  (much like how aces are worth either 1 or 11 points).

Write a function that inputs a list of strings (representing a blackjack hand) and an integer that represents the alternative king value. The function should output an integer represting the value of the hand if it is less than or equal to 21, and False if it exceeds 21. Other than the alternative king value, normal blackjack rules apply.

The cards, in order ace-through king, are represented as strings as follows:
['A', '2', '3','4', '5', '6','7', '8', '9','10', 'J', 'Q','K']

A hand has between 2 and 20 cards, inclusize. The alternative king value is between 2 and 9, inclusive.


Blackjack rules: the value of a hand is determined by maximimizing the value of the sum of its cards while not exceeding 21 if possible. Number cards are worth their value, Jacks ('J') and Queens ('Q') are worth 10, Aces are worth either 1 or 11, and kings, again, are worth either 10 or their alternative value.
*/

function krazyKingBlackjack(hand, kingValue) {
  var score = 0;
  var aceFound = false;
  var kingCount = 0;
  hand.forEach(function (card) {
    switch (card) {
      case 'J':
        score += 10;
        break;
      case 'Q':
        score += 10;
        break;
      case 'K':
        score += kingValue;
        kingCount++;
        break
      case 'A':
        score ++;
        aceFound = true;
        break
      default:
        score += Number(card)
    }
  });
  var valueRemainder = 10 - kingValue;
  var possibleScores = [score];
  for (var i = 0; i < kingCount; i++) {
    var nextScore = possibleScores[possibleScores.length-1] + valueRemainder;
    possibleScores.push(nextScore);
  };
  if (aceFound) {
    var length = possibleScores.length;
    for (var i = 0; i <length; i++) {
      possibleScores.push(possibleScores[i]+10)
    }
  }
  possibleScores.sort(function (a,b) {
    return a-b
  });
  var len = possibleScores.length;
  var solution = false
  for (var i = 0; i < len; i++) {
    if (possibleScores[i] > 21) {
      return solution
    }else{
      solution = possibleScores[i]
    }
  }
  return solution
}
