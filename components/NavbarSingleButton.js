import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const NavbarSingleButton = ({ title, handleOnPressIcon, icon }) => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.navbarTitle}>{title}</Text>
      <Pressable onPress={() => handleOnPressIcon && handleOnPressIcon()}>
        {icon && icon}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  navbarTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default NavbarSingleButton;
