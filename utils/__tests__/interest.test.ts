import { InterestFormValues } from "@/components/InterestForm";
import { calculateInterest } from "../interest";

const mockValues: InterestFormValues = {
  startAmount: 10000,
  interestRate: 3,
  investmentTerm: 3,
  frequency: "monthly",
};

describe("calculateInterest", () => {
  describe("Given monthly interest paid", () => {
    it("should correctly calculate final balance", () => {
      const finalBalance = calculateInterest(mockValues);

      expect(finalBalance).toBe(10941);
    });
  });
  describe("Given quarterly interest paid", () => {
    it("should correctly calculate final balance", () => {
      const finalBalance = calculateInterest({
        ...mockValues,
        frequency: "quarterly",
      });

      expect(finalBalance).toBe(10938);
    });
  });
  describe("Given yearly interest paid", () => {
    it("should correctly calculate final balance", () => {
      const finalBalance = calculateInterest({
        ...mockValues,
        frequency: "yearly",
      });

      expect(finalBalance).toBe(10927);
    });
  });
  describe("Given at maturity interest paid", () => {
    it("should correctly calculate final balance", () => {
      const finalBalance = calculateInterest({
        ...mockValues,
        frequency: "at-maturity",
      });

      expect(finalBalance).toBe(10900);
    });
  });
});
