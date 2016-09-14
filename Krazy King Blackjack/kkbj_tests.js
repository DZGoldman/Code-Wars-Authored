describe("Tests", function() {
    it("Static Tests:", function() {
      Test.assertEquals( krazyKingBlackjack(['9', '9', 'K', 'A'], 3), false)
      Test.assertEquals( krazyKingBlackjack(['K','K', 'K'], 7), 21)
      Test.assertEquals( krazyKingBlackjack(['K','A', '4'], 6), 21)
      Test.assertEquals( krazyKingBlackjack(['A', 'A', 'A', 'K'], 3), 16)
      Test.assertEquals( krazyKingBlackjack(['A','A', 'A', 'K', '4'], 9), 17)
      Test.assertEquals( krazyKingBlackjack(['K','K','K','K','K','K','K','K','K','K'], 2), 20)
      Test.assertEquals( krazyKingBlackjack(['A','A','A','A','A','A','A','A'], 9), 18)

    });

    it("Random Tests", function() {
     var cards = ['A', '2', '3','4', '5', '6','7', '8', '9','10', 'J', 'Q','K']

        for (var i = 0; i < 14; i++) {
            var hand = []
            var cardCount = Math.floor(4*Math.random()) + 2
            var kingValue = 2+ Math.floor(7*Math.random())
            for(var j = 0; j < cardCount; j++){
              hand.push(cards[Math.floor(Math.random()*cards.length)]);
            }
            Test.assertEquals(krazyKingBlackjack(hand, kingValue), krazyKingBlackJackSolution(hand, kingValue));
        }

    });
})
