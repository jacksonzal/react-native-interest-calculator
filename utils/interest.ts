import { InterestFormValues } from "@/components/InterestForm";

export const calculateInterest = ({
  startAmount,
  interestRate,
  investmentTerm,
  frequency,
}: InterestFormValues) => {
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
      const interestEarned =
        (startAmount * interestRate * investmentTerm) / 100;
      totalAmount = startAmount + interestEarned;
      break;
    }
  }

  return Math.round(totalAmount);
};
