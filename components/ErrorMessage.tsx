import { StyleSheet, Text } from "react-native";

type Props = {
  message?: string;
};

export const ErrorMessage = ({ message }: Props) => {
  if (!message) {
    return null;
  }

  return <Text style={styles.error}>{message}</Text>;
};

const styles = StyleSheet.create({
  error: {
    color: "#cc0000", // I would usually get this from a theme or whatever styling solution the codebase uses
  },
});
