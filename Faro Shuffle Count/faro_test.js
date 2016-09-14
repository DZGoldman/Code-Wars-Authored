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
