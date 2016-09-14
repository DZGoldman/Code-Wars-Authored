Test.describe('Static Tests')
Test.assert_equals(faro_cycles(2),1)
Test.assert_equals(faro_cycles(52),8)
Test.assert_equals(faro_cycles(542),540)
Test.assert_equals(faro_cycles(1250),156)
Test.assert_equals(faro_cycles(1954),30)
Test.describe('Random Tests:')
import random
for _ in range(15):
    input = 2* random.randint(1,1000)
    Test.assert_equals(faro_cycles(input) == correct_faro_cycles(input),  True)
