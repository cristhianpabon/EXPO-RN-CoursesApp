import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import ButtonPrimary from "../components/ButtonPrimary";
import ButtonSecondary from "../components/ButtonSecondary";
import FormInput from "../components/FormInput";
import { SIGNIN } from "../redux/slices/AuthSlice";

const EditProfileScreen = () => {
  const userId = useSelector((state) => state.auth.userId);

  return (
    <SafeAreaView>
        <Text>Edit Profile..</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFFFFF",
    },
  });
  
export default EditProfileScreen;
