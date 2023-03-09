import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const ButtonSecondary = ({ buttonText, buttonHandleOnPress }) => {
  return (
    <Pressable
      style={styles.ButtonSecondary}
      onPress={() => buttonHandleOnPress && buttonHandleOnPress()}
    >
      <Text style={styles.ButtonSecondaryText}>{buttonText}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  ButtonSecondary: {
    padding: 10,
    alignSelf: "center",
    marginBottom: 20,
    borderWidth: 2,
    borderRadius: 50,
  },
  ButtonSecondaryText: {
    color: "#000000",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default ButtonSecondary;
