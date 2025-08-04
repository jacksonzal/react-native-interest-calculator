export const validatePositiveNumber = (value?: number) => {
  if (!value || isNaN(value) || value <= 0) {
    return "Please enter a valid positive number";
  }

  return true;
};
