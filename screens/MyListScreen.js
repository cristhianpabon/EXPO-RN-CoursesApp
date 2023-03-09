import React from "react";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import NavbarSingleButton from "../components/NavbarSingleButton";
import CourseItem from "../components/CourseItem";

const MyListScreen = () => {
  const { courses } = useSelector((state) => state.courses);

  console.log("MyList:", courses);
  return (
    <SafeAreaView style={styles.container}>
      <NavbarSingleButton title={"My List"} />
      <FlatList
        data={courses}
        renderItem={({ item }) => {
          if (item.isAdded) {
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

export default MyListScreen;
