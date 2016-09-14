test.describe("Static Tests")
Test.assert_equals( krazy_king_blackjack(['A', 'A', 'J', '8', 'K'], 2), False)
Test.assert_equals( krazy_king_blackjack(['9', '9', 'K', 'A'], 3), False)
Test.assert_equals( krazy_king_blackjack(['K','K', 'K'], 7), 21)
Test.assert_equals( krazy_king_blackjack(['K','A', '4'], 6), 21)
Test.assert_equals( krazy_king_blackjack(['A', 'A', 'A', 'K'], 3), 16)
Test.assert_equals( krazy_king_blackjack(['A','A', 'A', 'K', '4'], 9), 17)
Test.assert_equals( krazy_king_blackjack(['K','K','K','K','K','K','K','K','K','K'], 2), 20)
Test.assert_equals( krazy_king_blackjack(['A','A','A','A','A','A','A','A'], 9), 18)

test.describe("Random Tests")
cards = ['A', '2', '3','4', '5', '6','7', '8', '9','10', 'J', 'Q','K']
import random
Test.assert_equals( 12<=krazy_king_blackjack(['A', 'K', random.choice(cards)], random.randint(2,9))<=21, True)
Test.assert_equals( krazy_king_blackjack(['9', '7', 'A', 'K'], random.randint(5,9)), False)
Test.assert_equals(12<=krazy_king_blackjack(['A', random.choice(cards), random.choice(cards)], random.randint(2,9))<=21, True)


for _ in range(10):
    king_value = random.randint(2,9)
    hand = [random.choice(cards) for _ in range(random.randint(2,8))]
    Test.assert_equals(krazy_king_blackjack( hand, king_value),krazy_king_blackjack_solution(hand, king_value)  )
