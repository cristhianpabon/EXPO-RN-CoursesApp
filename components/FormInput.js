import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const FormInput = ({ formLabel, formPlaceholder, formHandleOnChangeValue, secureTextEntry }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{formLabel}</Text>
      <TextInput
        style={styles.inputText}
        placeholder={formPlaceholder}
        onChangeText={formHandleOnChangeValue}
        autoCapitalize="none"
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: "center",
  },
  label: {
    color: "#3d3d3d",
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 10,
  },
  inputText: {
    backgroundColor: "#eeeeee",
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 10,
  },
});

export default FormInput;
