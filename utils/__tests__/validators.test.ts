import { validateStringAsPositiveNumber } from "../validators";

describe("validateStringAsPositiveNumber", () => {
  describe("Given no value", () => {
    it("should return error message", () => {
      const result = validateStringAsPositiveNumber();

      expect(result).toBe("Please enter a valid positive number");
    });
  });
  describe("Given NaN value", () => {
    it("should return error message", () => {
      const result = validateStringAsPositiveNumber("2askjdn");

      expect(result).toBe("Please enter a valid positive number");
    });
  });
  describe("Given value less than 0", () => {
    it("should return error message", () => {
      const result = validateStringAsPositiveNumber("-1");

      expect(result).toBe("Please enter a valid positive number");
    });
  });

  describe("Given positive value", () => {
    it("should return true", () => {
      const result = validateStringAsPositiveNumber("1");

      expect(result).toBeTruthy();
    });

    describe("Given decimal", () => {
      it("should return true", () => {
        const result = validateStringAsPositiveNumber("0.1");

        expect(result).toBeTruthy();
      });
    });
  });
});
