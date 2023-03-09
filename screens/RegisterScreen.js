import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { SIGNUP } from "../redux/slices/AuthSlice";
import ButtonPrimary from "../components/ButtonPrimary";
import FormInput from "../components/FormInput";
import ButtonSecondary from "../components/ButtonSecondary";

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();

  const handleOnPressSignUp = () => {
    if (email && password) {
      dispatch(SIGNUP(email, password));
    }
  };

  const handleOnPressLogin = () => {
    navigation.navigate("login");
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginHeader}>
        <Text style={styles.loginTitle}>Courses App</Text>
        <Text style={styles.loginTitle}>Register</Text>
      </View>
      <View style={styles.loginContent}>
        <FormInput
          formLabel={"Email"}
          formPlaceholder={"Example@email.com"}
          formHandleOnChangeValue={setEmail}
        />
        <FormInput
          formLabel={"Password"}
          formPlaceholder={"xxxxxx"}
          formHandleOnChangeValue={setPassword}
          secureTextEntry={true}
        />
      </View>
      <View style={styles.loginFooter}>
        <View style={styles.buttonWidth}>
          <ButtonPrimary
            buttonText={"Sign Up"}
            buttonHandleOnPress={handleOnPressSignUp}
          />
        </View>
        <View>
          <ButtonSecondary
            buttonText={"Login with your Account"}
            buttonHandleOnPress={handleOnPressLogin}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  loginTitle: {
    color: "#3d3d3d",
    fontSize: 44,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  loginHeader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loginContent: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  loginFooter: {
    flex: 1,
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
    paddingVertical: 5,
  },
  buttonWidth: {
    width: "90%",
    alignSelf: "center",
    marginBottom: 20,
  },
});

export default RegisterScreen;
