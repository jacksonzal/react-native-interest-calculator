import {
  INTEREST_FREQUENCY_OPTIONS,
  InterestFrequency,
} from "@/constants/interest";
import { validateStringAsPositiveNumber } from "@/utils/validators";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { StyleSheet, View } from "react-native";
import { FinalAmountView } from "./FinalAmountView";
import { NumericInput } from "./NumericInput";
import { RadioButtons } from "./RadioButtons";

export type InterestFormValues = {
  startAmount: string;
  interestRate: string;
  investmentTerm: string;
  frequency: InterestFrequency;
};

export const InterestForm = () => {
  const form = useForm<InterestFormValues>({
    defaultValues: {
      frequency: "monthly",
    },
  });

  const {
    control,
    formState: { errors },
  } = form;

  return (
    <FormProvider {...form}>
      <View style={styles.container}>
        <Controller
          control={control}
          name="startAmount"
          rules={{
            required: "Start deposit amount is required",
            validate: validateStringAsPositiveNumber,
          }}
          render={({ field: { onChange, value, ...field } }) => (
            <NumericInput
              label="Start deposit amount ($)"
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
            validate: validateStringAsPositiveNumber,
          }}
          render={({ field: { onChange, value, ...field } }) => (
            <NumericInput
              label="Interest rate (%)"
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
            validate: validateStringAsPositiveNumber,
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

        <FinalAmountView />
      </View>
    </FormProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
  },
});
