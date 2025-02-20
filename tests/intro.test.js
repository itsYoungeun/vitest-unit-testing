import { describe, test, it, expect } from "vitest";
import { max } from "../src/intro";

describe('max', () => {
    // AAA
    // Arrange: Turn on the TV
    // Act: Press the power button
    // Assert: Verify TV is off

    // // Arrange
    // const a = 2;
    // const b = 1;

    // // Act
    // const result = max(a, b);

    // // Assert
    // expect(result).toBe(2);

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