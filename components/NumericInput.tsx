import { TextInput, TextInputProps } from "react-native";

type Props = TextInputProps;

export const NumericInput = ({ onChangeText, ...props }: Props) => {
  const handleChangeText = (value: string) => {
    // Remove any non-numeric characters except decimal point
    const nextValue = value.replace(/[^0-9.]/g, "");

    onChangeText?.(nextValue);
  };

  return (
    <TextInput
      keyboardType="decimal-pad"
      onChangeText={handleChangeText}
      {...props}
    />
  );
};
