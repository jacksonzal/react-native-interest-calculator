import { calculateInterest } from "@/utils/interest";
import { useFormContext } from "react-hook-form";
import { StyleSheet, Text, View } from "react-native";
import { InterestFormValues } from "./InterestForm";

export const FinalAmountView = () => {
  const { formState, watch } = useFormContext<InterestFormValues>();

  if (!formState.isValid) {
    return null;
  }

  const { startAmount, interestRate, investmentTerm, ...values } = watch();

  return (
    <View style={styles.container}>
      <Text>Final amount:</Text>
      <Text style={styles.amount}>
        $
        {calculateInterest({
          startAmount: parseFloat(startAmount),
          investmentTerm: parseFloat(investmentTerm),
          interestRate: parseFloat(interestRate),
          ...values,
        })}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightgray",
    padding: 16,
    gap: 8,
  },
  amount: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
