
'''
https://www.codewars.com/kata/57bb798756449dea77000020
Krazy King BlackJack is just like blackjack, with one difference: the kings!
Instead of the kings being simply worth 10 points, kings are either either 10 points or some other number of points announced by the dealer at the start of the game. Whichever value yields the best hand is the one that plays  (much like how aces are worth either 1 or 11 points).

Write a function that inputs a list of strings (representing a blackjack hand) and an integer that represents the alternative king value. The function should output an integer represting the value of the hand if it is less than or equal to 21, and False if it exceeds 21. Other than the alternative king value, normal blackjack rules apply.

The cards, in order ace-through king, are represented as strings as follows:
```python
['A', '2', '3','4', '5', '6','7', '8', '9','10', 'J', 'Q','K']
```
A hand has between 2 and 20 cards, inclusize. The alternative king value is between 2 and 9, inclusive.


Blackjack rules: the value of a hand is determined by maximimizing the value of the sum of its cards while not exceeding 21 if possible. Number cards are worth their value, Jacks ('J') and Queens ('Q') are worth 10, Aces are worth either 1 or 11, and kings, again, are worth either 10 or their alternative value.
'''


def krazy_king_blackjack (hand, king_value):
    score = 0
    ace_found = False
    king_count = 0
    for card in hand:
        if card in ['J', 'Q']:
            score += 10
        elif card == 'K':
            score += king_value
            king_count += 1
        elif card == 'A':
            score += 1
            ace_found = True
        else:
            score += int(card)

    value_remainder = 10 - king_value
    possible_scores = [score]
    for _ in range(king_count):
        next_score = possible_scores[-1] + value_remainder
        if next_score <= 21:
            possible_scores.append(next_score)
        else:
            break
    if possible_scores[0]>21:
        return False

    max_low_ace = max([score for score in possible_scores if score <= 21])
    if ace_found and possible_scores[0] + 10 <=21:
        max_high_ace = max([score +10 for score in possible_scores if score + 10 <= 21])
        return max (max_low_ace, max_high_ace)
    else:
        return max_low_ace

# print(krazy_king_blackjack(['A', 'K',  '7', 'A'],4))



def krazy_king_blackjack (hand, king_value):
    score = 0
    ace_found = False
    king_count = 0
    for card in hand:
        if card in ['J', 'Q']:
            score += 10
        elif card == 'K':
            score += king_value
            king_count += 1
        elif card == 'A':
            score += 1
            ace_found = True
        else:
            score += int(card)

    value_remainder = 10 - king_value
    possible_scores = [score]
    for _ in range(king_count):
        next_score = possible_scores[-1] + value_remainder
        if next_score <= 21:
            possible_scores.append(next_score)
        else:
            break
    if possible_scores[0]>21:
        return False

    max_low_ace = max([score for score in possible_scores if score <= 21])
    if ace_found and possible_scores[0] + 10 <=21:
        max_high_ace = max([score +10 for score in possible_scores if score + 10 <= 21])
        return max (max_low_ace, max_high_ace)
    else:
        return max_low_ace


#
