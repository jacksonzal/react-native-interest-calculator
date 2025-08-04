import {
  INTEREST_FREQUENCY_OPTIONS,
  InterestFrequency,
} from "@/constants/interest";
import { validatePositiveNumber } from "@/utils/validators";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Button, StyleSheet, View } from "react-native";
import { NumericInput } from "./NumericInput";
import { RadioButtons } from "./RadioButtons";

export type InterestFormValues = {
  startAmount: number;
  interestRate: number;
  investmentTerm: number;
  frequency: InterestFrequency;
};

export const InterestForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<InterestFormValues>({
    defaultValues: {
      frequency: "monthly",
    },
  });

  const onSubmit: SubmitHandler<InterestFormValues> = (values) => {
    console.log(values);
  };

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name="startAmount"
        rules={{
          required: "Start deposit amount is required",
          validate: validatePositiveNumber,
        }}
        render={({ field: { onChange, value, ...field } }) => (
          <NumericInput
            label="Start deposit amount"
            onChangeText={onChange}
            value={value?.toString() || ""}
            errorMessage={errors.startAmount?.message}
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="interestRate"
        rules={{
          required: "Interest rate is required",
          validate: validatePositiveNumber,
        }}
        render={({ field: { onChange, value, ...field } }) => (
          <NumericInput
            label="Interest rate"
            onChangeText={onChange}
            value={value?.toString() || ""}
            errorMessage={errors.interestRate?.message}
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="investmentTerm"
        rules={{
          required: "Investment term is required",
          validate: validatePositiveNumber,
        }}
        render={({ field: { onChange, value, ...field } }) => (
          <NumericInput
            label="Investment term (years)"
            onChangeText={onChange}
            value={value?.toString() || ""}
            errorMessage={errors.investmentTerm?.message}
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="frequency"
        rules={{
          required: "You must select an option",
        }}
        render={({ field: { onChange, value } }) => (
          <RadioButtons
            label="Interest paid frequency"
            selectedValue={value}
            onChange={onChange}
            options={INTEREST_FREQUENCY_OPTIONS}
          />
        )}
      />

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
  },
});
