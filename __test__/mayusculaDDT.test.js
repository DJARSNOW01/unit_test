    // TEST

    const isUpperCase = require('../utils/esmayuscula');

    describe('UpperCase', () => {
        test.each`
          firstValue         |expectedResult    
          ${"HELLO"}       | ${true}
          ${"hello"}       | ${false}
        `('$Value should return $expectedResult', ({firstValue, expectedResult}) => {
          expect(isUpperCase(firstValue)).toBe(expectedResult);
        });
    });


