/*
https://www.codewars.com/kata/57bc802c615f0ba1e3000029

A faro shuffle of a deck of playing cards is a shuffle in which the deck is split exactly in half and then the cards in the two halves are perfectly interwoven, such that the original bottom card is still on the bottom and the original top card is still on top.

For example, faro shuffling the list
```python
['ace','two', 'three', 'four', 'five', 'six']
```
gives
```python
['ace', 'four', 'two', 'five', 'three', 'six' ]
```

If 8 perfect faro shuffles are performed on a deck of 52 playing cards, the deck is restored to its original order.

Write a function that inputs an integer n and returns an integer representing the number of faro shuffles it takes to restore a deck of n cards to its original order.

Assume n is an even number between 2 and 2000.
*/
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
