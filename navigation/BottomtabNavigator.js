import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CoursesScreen from "../screens/CoursesScreen";
import MyListScreen from "../screens/MyListScreen";
import WishListScreen from "../screens/WishListScreen";
import { Image } from "react-native";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();

const BottomtabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="courses"
        component={CoursesScreen}
        options={{
          tabBarIcon: () => (
            <Image source={require("../assets/img/hat.png")} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="mylist"
        component={MyListScreen}
        options={{
          tabBarIcon: () => (
            <Image source={require("../assets/img/mylist.png")} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="wishlist"
        component={WishListScreen}
        options={{
          tabBarIcon: () => (
            <Image source={require("../assets/img/heart.png")} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => (
            <Image source={require("../assets/img/people.png")} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomtabNavigator;
