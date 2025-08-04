import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
import { ErrorMessage } from "./ErrorMessage";

type Props = TextInputProps & {
  label: string;
  errorMessage?: string;
};

export const NumericInput = ({
  label,
  errorMessage,
  onChangeText,
  style,
  ...props
}: Props) => {
  const handleChangeText = (value: string) => {
    // Remove any non-numeric characters except decimal point
    const nextValue = value.replace(/[^0-9.]/g, "");

    onChangeText?.(nextValue);
  };

  return (
    <View style={styles.container}>
      <Text>{label}</Text>
      <TextInput
        style={[styles.input, style]}
        keyboardType="decimal-pad"
        onChangeText={handleChangeText}
        {...props}
      />
      <ErrorMessage message={errorMessage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 4,
  },
  input: {
    fontSize: 16,
    padding: 6,
    borderWidth: 1,
    borderColor: "gray",
  },
});
