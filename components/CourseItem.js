import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import ButtonPrimary from "./ButtonPrimary";

const CourseItem = ({
  courseImage,
  title,
  createdBy,
  handleOnPress,
  isAdded,
  isWished,
  hideIcon,
  hideButton,
}) => {
  const setCourseItem = (courseImage) => {
    let image = "";
    switch (courseImage) {
      case "html":
        image = (
          <Image
            style={styles.bannerImage}
            source={require("../assets/img/courses/html.png")}
          />
        );
        break;
      case "javascript":
        image = (
          <Image
            style={styles.bannerImage}
            source={require("../assets/img/courses/javascript.png")}
          />
        );
        break;
      case "react":
        image = (
          <Image
            style={styles.bannerImage}
            source={require("../assets/img/courses/react.png")}
          />
        );
        break;

      default:
        break;
    }

    return image;
  };

  return (
    <View style={styles.courseItem}>
      <View style={styles.courseItemContent}>
        <View style={styles.courseItemImage}>{setCourseItem(courseImage)}</View>
        <View style={styles.courseItemText}>
          <Text style={styles.courseItemName}>{title}</Text>
          <Text style={styles.courseItemCreatedBy}>{createdBy}</Text>
        </View>
        {!hideIcon && (
          <View style={styles.courseItemIcon}>
            {isWished ? (
              <Image
                style={styles.courseItemIconImage}
                source={require("../assets/img/heart_black.png")}
              />
            ) : (
              <Image
                style={styles.courseItemIconImage}
                source={require("../assets/img/heart.png")}
              />
            )}
          </View>
        )}
      </View>
      {!hideButton && (
        <>
          {isAdded ? (
            <View style={styles.courseItemFooter}>
              <View style={styles.courseItemAdded}>
                <Text style={styles.courseItemAddedText}>Ya esta agregado</Text>
              </View>
            </View>
          ) : (
            <View style={styles.courseItemFooter}>
              <ButtonPrimary
                buttonText={"Agregar a mi lista"}
                buttonHandleOnPress={() => handleOnPress()}
              />
            </View>
          )}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  courseItem: {
    padding: 10,
    width: "100%",
    alignSelf: "center",
  },
  courseItemName: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "bold",
  },
  courseItemContent: {
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: 10,
  },
  courseItemFooter: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "bold",
  },
  courseItemImage: {
    width: "25%",
    minWidth: 100,
    maxWidth: 120,
    height: 80,
  },
  courseItemText: {
    width: "50%",
    paddingLeft: 10,
  },
  courseItemIcon: {
    width: "25%",
  },
  courseItemIconImage: {
    alignSelf: "center",
  },
  courseItemAdded: {
    backgroundColor: "#ededed",
    textAlign: "center",
    paddingVertical: 10,
  },
  courseItemAddedText: {
    textAlign: "center",
  },
  bannerImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});

export default CourseItem;
