export const validateStringAsPositiveNumber = (value?: string) => {
  if (!value || isNaN(Number(value)) || Number(value) <= 0) {
    return "Please enter a valid positive number";
  }

  return true;
};
