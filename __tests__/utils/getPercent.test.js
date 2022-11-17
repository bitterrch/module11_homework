import { getPercent } from "../../utils/getPercent";

describe ("test for getPercent function", () => {
    it("should operate correctly with positive number", () => {
        expect(getPercent(50, 200)).toBe(100);
    }),
    it("should operate correctly with negative number", () => {
        expect(getPercent(-50, 200)).toBe(-100);
        expect(getPercent(50, -200)).toBe(-100);
    }),
    it("should operate correctly with 0", () => {
        expect(getPercent(100, 0)).toBe(0);
        expect(getPercent(0, 100)).toBe(0);
    }),
    it("should operate correctly with fractional number", () => {
        expect(getPercent(10.5, 100)).toBe(10.5);
        expect(getPercent(50, 100.5)).toBeLessThan(50.25); //50.249999999
    })
});