// Importing the Chai library to use its assert method, which offers more features than the built-in Node.js assertions
import { assert } from "chai";


//We are importing our Functions from src/index.js
import {
  helloWorld,
  addition,
  subtraction,
  multiplication,
  division,
  remainder,
  exponentiation,
} from "../src/index.js";




describe('helloWorld Function', () => {
    it('should return a string', function() {
        const result = helloWorld();
        assert.typeOf(result, 'string', 'The return value should be a string');
    });


    it('should return "Hello World"', function() {
        const result = helloWorld();
        assert.equal(result, 'Hello World', "The return value should be 'Hello World'");
    });
});



describe("Addition Function", () => {
  it("should correctly add two numbers", () => {
    const result = addition(5, 10);
    assert.equal(result, 15, "5 + 10 should equal 15");
  });
});

describe("Subtraction Function", () => {
  it("should correctly subtract two numbers", () => {
    const result = subtraction(10, 5);
    assert.equal(result, 5, "10 - 5 should equal 5");
  });
});

describe("Multiplication Function", () => {
  it("should correctly multiply two numbers", () => {
    const result = multiplication(7, 7);
    assert.equal(result, 49, "7 * 7 should equal 49");
  });
});

describe("Division Function", () => {
  it("should correctly divide two numbers", () => {
    const result = division(50, 10);
    assert.equal(result, 5, "50 / 10 should equal 5");
  });
});

describe("Remainder Function", () => {
  it("should correctly return the remainder of two numbers", () => {
    const result = remainder(5, 4);
    assert.equal(result, 1, "5 % 4 should equal 1");
  });
});

describe("Exponentiation Function", () => {
  it("should correctly return the exponentiation of a number", () => {
    const result = exponentiation(6, 2);
    assert.equal(result, 36, "6^2 should equal 36");
  });
});
