import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const ButtonPrimary = ({ buttonText, buttonHandleOnPress }) => {
  return (
    <Pressable
      style={styles.buttonPrimary}
      onPress={() => buttonHandleOnPress && buttonHandleOnPress()}
    >
      <Text style={styles.buttonPrimaryText}>{buttonText}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonPrimary: {
    backgroundColor: "#000000",
    borderRadius: 25,
    padding: 10,
  },
  buttonPrimaryText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default ButtonPrimary;
