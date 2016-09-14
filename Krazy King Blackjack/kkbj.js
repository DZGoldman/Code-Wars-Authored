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

console.log(krazyKingBlackjack(['A','A', '3'], 9));
// Test.assertEquals( krazyKingBlackjack(['9', '9', 'K', 'A'], 3), False)
// Test.assertEquals( krazyKingBlackjack(['K','K', 'K'], 7), 21)
// Test.assertEquals( krazyKingBlackjack(['K','A', '4'], 6), 21)
// Test.assertEquals( krazyKingBlackjack(['A', 'A', 'A', 'K'], 3), 16)
// Test.assertEquals( krazyKingBlackjack(['A','A', 'A', 'K', '4'], 9), 17)
// Test.assertEquals( krazyKingBlackjack(['K','K','K','K','K','K','K','K','K','K'], 2), 20)
// Test.assertEquals( krazyKingBlackjack(['A','A','A','A','A','A','A','A'], 9), 18)
