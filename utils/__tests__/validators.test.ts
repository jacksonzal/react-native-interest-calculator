import { validatePositiveNumber } from "../validators";

describe("validatePositiveNumber", () => {
  describe("Given no value", () => {
    it("should return error message", () => {
      const result = validatePositiveNumber();

      expect(result).toBe("Please enter a valid positive number");
    });
  });
  describe("Given NaN value", () => {
    it("should return error message", () => {
      const result = validatePositiveNumber("2.." as any);

      expect(result).toBe("Please enter a valid positive number");
    });
  });
  describe("Given value less than 0", () => {
    it("should return error message", () => {
      const result = validatePositiveNumber(-1);

      expect(result).toBe("Please enter a valid positive number");
    });
  });

  describe("Given positive value", () => {
    it("should return true", () => {
      const result = validatePositiveNumber(1);

      expect(result).toBeTruthy();
    });
  });
});
