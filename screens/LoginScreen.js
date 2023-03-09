import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { SIGNIN } from "../redux/slices/AuthSlice";
import { addCourses, loadCourses } from "../redux/slices/CoursesSlice";

import ButtonPrimary from "../components/ButtonPrimary";
import ButtonSecondary from "../components/ButtonSecondary";
import FormInput from "../components/FormInput";

const LoginScreen = ({ navigation }) => {
  const auth = useSelector((state) => state.auth);
  const courses = useSelector((state) => state.courses);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();

  const handleOnPressSignIn = () => {
    if (email && password) {
      dispatch(SIGNIN(email, password));
    }
  };

  const handleOnPressRegister = () => {
    navigation.navigate("register");
  };

  // console.log(courses);
  useEffect(() => {
    dispatch(
      addCourses(
        "HTML initial knowledge for begginers developers",
        "html",
        "Jhonny Tail",
        0,
        0
      )
    );
    dispatch(
      addCourses(
        "Javascript Ninja for advance developers",
        "javascript",
        "Tony Pawn",
        0,
        1
      )
    );
    dispatch(
      addCourses(
        "React Senior Developer Master Class",
        "react",
        "Antony Rock",
        0,
        1
      )
    );
    dispatch(
      addCourses("React course complete course", "react", "Rachel Bark", 1, 0)
    );
    dispatch(loadCourses());
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.loginHeader}>
        <Text style={styles.loginTitle}>Courses App</Text>
        <Text style={styles.loginTitle}>Login</Text>
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
            buttonText={"Sign In"}
            buttonHandleOnPress={handleOnPressSignIn}
          />
        </View>
        <View>
          <ButtonSecondary
            buttonText={"Register an Account"}
            buttonHandleOnPress={handleOnPressRegister}
          />
        </View>
      </View>
    </SafeAreaView>
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

export default LoginScreen;
