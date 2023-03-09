import React from "react";
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSelector } from "react-redux";

import CourseItem from "../components/CourseItem";
import NavbarSingleButton from "../components/NavbarSingleButton";

const CoursesScreen = () => {
  const { email } = useSelector((state) => state.auth);
  const { courses } = useSelector((state) => state.courses);

  console.log("Courses:", courses);
  console.log(email);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <View>
          <Text style={styles.coursesLabel}>Welcome, {email}</Text>
        </View>
        <View>
          <View>
            <Image
              style={styles.bannerImage}
              source={require("../assets/img/banner.png")}
            />
          </View>
          <Text style={styles.coursesTitle}>Keep moving up</Text>
          <Text style={styles.coursesDescription}>
            Learn the skills you need to take the next step.
          </Text>
        </View>
        <NavbarSingleButton title={"Categories"} />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalScrollView}
        >
          <Pressable style={styles.buttonOutlined}>
            <Text style={styles.buttonOutlinedText}>Development</Text>
          </Pressable>
          <Pressable style={styles.buttonOutlined}>
            <Text style={styles.buttonOutlinedText}>Design</Text>
          </Pressable>
          <Pressable style={styles.buttonOutlined}>
            <Text style={styles.buttonOutlinedText}>Business</Text>
          </Pressable>
          <Pressable style={styles.buttonOutlined}>
            <Text style={styles.buttonOutlinedText}>Healt & Lifestyle</Text>
          </Pressable>
        </ScrollView>
        <View>
          {courses.length &&
            courses.map((course) => (
              <CourseItem
                key={course.id}
                courseImage={course.image}
                title={course.title}
                createdBy={course.createdBy}
                handleOnPress={() => console.log("course...")}
                isAdded={course.isAdded}
                isWished={course.isWished}
              />
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingVertical: 5,
  },
  coursesLabel: {
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 10,
    paddingVertical: 10,
  },
  bannerImage: {
    width: "100%",
    height: 200,
    resizeMode: "stretch",
  },
  coursesTitle: {
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 10,
    paddingVertical: 10,
  },
  coursesDescription: {
    fontSize: 16,
    fontWeight: "400",
    paddingLeft: 10,
    paddingVertical: 10,
  },
  horizontalScrollView: {
    minHeight: 60,
    maxHeight: 60,
    paddingHorizontal: 10,
  },
  buttonOutlined: {
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 25,
    padding: 10,
    alignSelf: "center",
    marginHorizontal: 3,
  },
  buttonOutlinedText: {
    fontSize: 16,
    fontWeight: "400",
  },
  courseImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});

export default CoursesScreen;
