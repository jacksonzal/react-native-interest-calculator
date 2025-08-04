export type InterestFrequency =
  | "monthly"
  | "quarterly"
  | "yearly"
  | "at-maturity";

type InterestFrequencyOption = { label: string; value: InterestFrequency };

export const INTEREST_FREQUENCY_OPTIONS: InterestFrequencyOption[] = [
  { label: "Monthly", value: "monthly" },
  { label: "Quarterly", value: "quarterly" },
  { label: "Yearly", value: "yearly" },
  { label: "At Maturity", value: "at-maturity" },
];
