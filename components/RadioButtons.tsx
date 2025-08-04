import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  options: { label: string; value: string }[];
  selectedValue: string;
  onChange: (value: string) => void;
};

export const RadioButtons = ({ options, selectedValue, onChange }: Props) => {
  return (
    <View style={styles.container}>
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
  );
};

const styles = StyleSheet.create({
  container: {
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
