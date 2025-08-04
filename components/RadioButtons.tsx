import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { ErrorMessage } from "./ErrorMessage";

type Props = {
  label: string;
  errorMessage?: string;
  options: { label: string; value: string }[];
  selectedValue: string;
  onChange: (value: string) => void;
};

export const RadioButtons = ({
  label,
  errorMessage,
  options,
  selectedValue,
  onChange,
}: Props) => {
  return (
    <View style={styles.container}>
      <Text>{label}</Text>
      <View style={styles.buttonsContainer}>
        {options.map(({ label, value }) => {
          const isSelected = selectedValue === value;
          return (
            <Pressable
              key={value}
              style={[styles.button, isSelected && styles.buttonSelected]}
              onPress={() => onChange(value)}
            >
              <Text style={isSelected && styles.textSelected}>{label}</Text>
            </Pressable>
          );
        })}
      </View>
      <ErrorMessage message={errorMessage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  buttonsContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "gray",
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
    backgroundColor: "transparent",
  },
  buttonSelected: {
    backgroundColor: "#ADD8E6",
  },
  textSelected: {
    fontWeight: "bold",
  },
});
