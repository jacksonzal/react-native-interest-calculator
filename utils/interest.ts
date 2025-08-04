import { InterestFrequency } from "@/constants/interest";

type CalculateInterestParams = {
  startAmount: number;
  interestRate: number;
  investmentTerm: number;
  frequency: InterestFrequency;
};

export const calculateInterest = ({
  startAmount,
  interestRate,
  investmentTerm,
  frequency,
}: CalculateInterestParams) => {
  let totalAmount = startAmount;

  switch (frequency) {
    case "monthly": {
      const monthlyRate = interestRate / 100 / 12;
      const totalPeriods = investmentTerm * 12;
      totalAmount = startAmount * Math.pow(1 + monthlyRate, totalPeriods);
      break;
    }
    case "quarterly": {
      const quarterlyRate = interestRate / 100 / 4;
      const totalPeriods = investmentTerm * 4;
      totalAmount = startAmount * Math.pow(1 + quarterlyRate, totalPeriods);
      break;
    }
    case "yearly": {
      const annualRate = interestRate / 100;
      totalAmount = startAmount * Math.pow(1 + annualRate, investmentTerm);
      break;
    }
    case "at-maturity": {
      totalAmount =
        startAmount + (startAmount * interestRate * investmentTerm) / 100;
      break;
    }
  }

  return Math.round(totalAmount);
};
