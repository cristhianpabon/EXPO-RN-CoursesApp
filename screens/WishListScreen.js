import React from "react";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import NavbarSingleButton from "../components/NavbarSingleButton";
import CourseItem from "../components/CourseItem";

const WishListScreen = () => {
  const { courses } = useSelector((state) => state.courses);

  console.log("WishList:", courses);
  return (
    <SafeAreaView style={styles.container}>
      <NavbarSingleButton title={"Wish List"} />
      <FlatList
        data={courses}
        renderItem={({ item }) => {
          if (item.isWished) {
            return (
              <CourseItem
                title={item.title}
                courseImage={item.image}
                createdBy={item.createdBy}
                handleOnPress={() => console.log("course...")}
                isAdded={item.isAdded}
                isWished={item.isWished}
                hideIcon={true}
                hideButton={true}
              />
            );
          }
        }}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingVertical: 10,
  },
});

export default WishListScreen;
