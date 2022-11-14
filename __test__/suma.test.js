    // TEST

const sum = require("../utils/suma");

    test("adds 1 + 2 to equal 3", () => {
        expect(sum(1,2)).toBe(3);
    })

    test("adds -2 + 6 to equal 4", () => {
        expect(sum(-2,6)).toBe(4);
    })

    test("adds -1 + -2 to equal -3", () => {
        expect(sum(-1,-2)).toBe(-3);
    })

        