const { add } = require("./add.js");

test('<What the test case does>', () => {
    const fnResult = add(5, 3);
    const expectedResult = 8;
    expect(fnResult).toBe(expectedResult);
});

/*
This method is used to compare the exact value of the received value with the expected value using strict equality (===).
    example: expect(result).toBe(42);
This method is used to compare objects or arrays. It checks if the received object is structurally equal to the expected object.
    example: expect(obj).toEqual({ prop: 'value' });
This method is the negative version of the .toBe() method. It is used to check that the received value is not strictly equal to the expected value.
    example: expect(result).not.toBe(10);
This method is the negative version of the .toEqual() method. It is used to check that the received object is not deeply equal to the expected object.
    example: expect(obj).not.toEqual({ prop: 'differentValue' });
This method checks if an array or iterable contains the expected item.
    example: expect(array).toContain(42);
This method is used to check the length of an array or string.
    expect(array).toHaveLength(3);
*/