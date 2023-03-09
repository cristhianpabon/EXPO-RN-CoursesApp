import React, { useState } from "react";
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";

import { signOut } from "../redux/slices/AuthSlice";

import ButtonSecondary from "../components/ButtonSecondary";
import NavbarSingleButton from "../components/NavbarSingleButton";

const ProfileScreen = ({ navigation }) => {
  const { email } = useSelector((state) => state.auth);
  const [pickerURI, setPickerURI] = useState();
  const dispatch = useDispatch();

  const handleOnPressSignOut = () => {
    dispatch(signOut());
  };

  const verifyPermissions = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    console.log(status);
    if (status !== "granted") {
      Alert.alert(
        "Permisos Insuficientes",
        "Necesita dar permisos de la camara para usar la aplicacion.",
        [{ text: "Ok" }]
      );
      return false;
    }

    return true;
  };

  const handlerTakeImage = async () => {
    const isCameraOK = await verifyPermissions();
    if (!isCameraOK) return;

    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.8,
    });

    if (image.uri) {
      const fileName = image.uri.split("/").pop();
      const Path = FileSystem.documentDirectory + fileName;
      console.log("------------------------------------");
      console.log(image.uri);
      console.log(FileSystem.documentDirectory);
      console.log(fileName);
      console.log(Path);
      console.log("------------------------------------");
      try {
        await FileSystem.moveAsync({
          from: image.uri,
          to: Path,
        });

        setPickerURI(Path);
      } catch (err) {
        console.log(err);
        throw err;
      }
    }
    // props.onImage(image.uri);
  };

  console.log(pickerURI);
  return (
    <SafeAreaView style={styles.container}>
      <NavbarSingleButton title={"Account"} />
      <View style={styles.profileHeader}>
        {pickerURI ? (
          <Image style={styles.profileImage} source={{ uri: pickerURI }} />
        ) : (
          <Image
            style={styles.profileImage}
            source={require("../assets/img/profile.png")}
          />
        )}

        <Pressable
          style={styles.profileEdit}
          onPress={() => handlerTakeImage()}
        >
          <Text style={styles.profileName}>Change Profile Photo</Text>
          <Image source={require("../assets/img/edit.png")} />
        </Pressable>
        <Text style={styles.profileEmail}>{email}</Text>
      </View>
      <View style={styles.profileMenuList}>
        <View style={styles.profileMenuList}>
          <Text style={styles.profileMenuLabel}>Account settings</Text>
          <Pressable style={styles.profileMenuButton}>
            <Text style={styles.profileMenuButtonText}>
              Email notifications preferences
            </Text>
          </Pressable>
          <Pressable style={styles.profileMenuButton}>
            <Text style={styles.profileMenuButtonText}>Learning reminders</Text>
          </Pressable>
        </View>
        <View style={styles.profileMenuList}>
          <Text style={styles.profileMenuLabel}>Help and support</Text>
          <Pressable style={styles.profileMenuButton}>
            <Text style={styles.profileMenuButtonText}>About Us</Text>
          </Pressable>
          <Pressable style={styles.profileMenuButton}>
            <Text style={styles.profileMenuButtonText}>
              Frequently asked questions
            </Text>
          </Pressable>
        </View>
      </View>
      <ButtonSecondary
        buttonText={"Sign out"}
        buttonHandleOnPress={handleOnPressSignOut}
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
  profileHeader: {
    paddingVertical: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    alignSelf: "center",
    marginBottom: 20,
  },
  profileEdit: {
    flexDirection: "row",
    justifyContent: "center",
  },
  profileName: {
    color: "#000000",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    marginRight: 10,
  },
  profileEmail: {
    color: "#000000",
    fontSize: 16,
    textAlign: "center",
  },
  profileMenuList: {
    width: "95%",
    alignSelf: "center",
    marginBottom: 15,
  },
  profileMenuLabel: {
    color: "#3d3d3d",
    fontSize: 14,
    marginBottom: 10,
  },
  profileMenuButton: {
    marginBottom: 10,
  },
  profileMenuButtonText: {
    color: "#000000",
    fontSize: 16,
  },
});

export default ProfileScreen;
