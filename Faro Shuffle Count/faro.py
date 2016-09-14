def faro_reset_count(deck_size):
    def shuffle(working_deck):
        bottom_half = working_deck[:deck_size//2]
        top_half = working_deck[deck_size//2:]
        del working_deck[:]
        for i in range(deck_size//2):
            working_deck.append(bottom_half[i])
            working_deck.append(top_half[i])
        return working_deck

    original_deck = [number for number in range(deck_size)]
    working_deck = shuffle(original_deck.copy())
    shuffle_count = 1
    while original_deck != working_deck:
        shuffle(working_deck)
        shuffle_count += 1
    return shuffle_count
# print(faro_reset_count(9026))
# import time
# i = 0
# while True:
#     count = faro_reset_count(i)
#     print(i, count)
#     if i == faro_reset_count(i):
#         print(i, count, '!!!!!!')
#         break
#     i+=2
#
# A faro shuffle of a deck of playing cards is a shuffle in which the deck is split exactly in half and then the cards in the two halves are perfectly interwoven, such that the original bottom card is still on the bottom and the original top card is still on top.
#
# For example, faro shuffling the list
# ```python
# ['ace','two', 'three', 'four', 'five', 'six']
# ```
# gives
# ```python
# ['ace', 'four', 'two', 'five', 'three', 'six' ]
# ```
#
# If 8 perfect faro shuffles are performed on a deck of 52 playing cards, the deck is restored to its original order.
#
# Write a function that inputs an integer n and returns an integer representing the number of faro shuffles it takes to restore a deck of n cards to its original order.
#
# Assume n is an even number between 2 and 2000.
#
# Test.describe('Static Tests')
# Test.assert_equals(faro_cycles(2),1)
# Test.assert_equals(faro_cycles(52),8)
# Test.assert_equals(faro_cycles(542),540)
# Test.assert_equals(faro_cycles(1250),156)
# Test.assert_equals(faro_cycles(1954),30)
#
#
# def correct_faro_cycles(deck_size):
#     def shuffle(working_deck):
#         bottom_half = working_deck[:deck_size//2]
#         top_half = working_deck[deck_size//2:]
#         del working_deck[:]
#         for i in range(deck_size//2):
#             working_deck.append(bottom_half[i])
#             working_deck.append(top_half[i])
#         return working_deck
#     original_deck = [number for number in range(deck_size)]
#     working_deck = shuffle(original_deck.copy())
#     shuffle_count = 1
#     while original_deck != working_deck:
#         shuffle(working_deck)
#         shuffle_count += 1
#     return shuffle_count
#
# Test.describe('Random Tests:')
# import random
# for _ in range(15):
#     input = 2* random.randint(1,1000)
#     Test.assert_equals(faro_cycles(input) == correct_faro_cycles(input),  True)
print(faro_reset_count(30))
