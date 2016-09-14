function faroCount(deckSize) {
    function shuffle(deck) {
        var halfPoint = deckSize / 2;
        var bottomHalf = deck.slice(0, halfPoint);
        var topHalf = deck.slice(halfPoint, deck.length);
        deck.length = 0;
        for (var i = 0; i < halfPoint; i++) {
            deck.push(bottomHalf[i]);
            deck.push(topHalf[i]);
        }
        return deck
    };

    var originalDeck = [];
    for (var i = 0; i < deckSize; i++) {
        originalDeck.push(i)
    };
    var workingDeck = shuffle(originalDeck.slice());
    var shuffleCount = 1;
    var originalDeckStr = JSON.stringify(originalDeck)
    while (originalDeckStr != JSON.stringify(workingDeck)) {
        shuffle(workingDeck)
        shuffleCount++

    }
    return shuffleCount
}

console.log(faroCount(52))

describe("Tests", function() {
    it("Static Tests:", function() {
        Test.assertEquals(faroCount(52), 8);
        Test.assertEquals(faroCount(2), 1);

    });

    it("Random Tests", function() {

        for (var i = 0; i < 15; i++) {
            deckSize = 2 * Math.floor(1000 * Math.random());
            Test.assertEquals(faroCount(deckSize), faroCountSolution(deckSize));
        }

    });
})
