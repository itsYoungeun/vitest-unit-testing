import { describe, test, it, expect } from "vitest";
import { max, fizzBuzz, calculateAverage, calculateFactorial } from "../src/intro";

describe('max', () => {
    it('should return the first argument if it is greater', () => {
        expect(max(2, 1)).toBe(2);
    })

    it('should return the second argument if it is greater', () => {
        expect(max(1, 2)).toBe(2);
    })

    it('should return the first argument if arguments are equal', () => {
        expect(max(1, 1)).toBe(1);
    })
})

describe('fizzBuzz', () => {
    it('should return FizzBuzz if arg is divisible by 3 and 5', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz');
    })

    it('should return Fizz if arg is only divisible by 3', () => {
        expect(fizzBuzz(12)).toBe('Fizz');
    })

    it('should return Buzz if arg is only divisible by 5', () => {
        expect(fizzBuzz(10)).toBe('Buzz');
    })

    it('should return arg as a string if not divisible by 5 or 3', () => {
        expect(fizzBuzz(8)).toBe('8');
    })
})

describe('calculateAverage', () => {
    it('should return NaN if given an empty array', () => {
        expect(calculateAverage([])).toBe(NaN);
    })

    it('should calculate the average of an array with a single element', () => {
        expect(calculateAverage([1])).toBe(1);
    })

    it('should calculate the average of an array with two elements', () => {
        expect(calculateAverage([1, 2])).toBe(1.5);
    })

    it('should calculate the average of an array with three elements', () => {
        expect(calculateAverage([1, 2, 3])).toBe(2);
    })
})

describe('calculateFactorial', () => {
    it('should return 1 if given 0', () => {
        expect(calculateFactorial(0)).toBe(1);
    })

    it('should return 1 if given 1', () => {
        expect(calculateFactorial(1)).toBe(1);
    })

    it('should return 2 if given 2', () => {
        expect(calculateFactorial(2)).toBe(2);
    })

    it('should return 6 if given 3', () => {
        expect(calculateFactorial(3)).toBe(6);
    })

    it('should return 24 if given 4', () => {
        expect(calculateFactorial(4)).toBe(24);
    })

    it('should return undefined if given a negative number', () => {
        expect(calculateFactorial(-1)).toBeUndefined();
    })
})