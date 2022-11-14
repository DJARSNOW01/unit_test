    // TEST

    const palindromo = require('../utils/palindromo.js');

    describe('palindromo', () => {
        test.each`
          firstValue    | expectedResult    
          ${"juan"}       | ${"nauj"}
          ${"fran"}       | ${"narf"}      
        `('$firstValue return $expectedResult', ({firstValue, expectedResult}) => {
          expect(palindromo(firstValue)).toBe(expectedResult);
        });
      });
