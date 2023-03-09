import { NavigationContainer } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";

import BottomtabNavigator from "./BottomtabNavigator";
import AuthNavigator from "./AuthNavigator";

const MainNavigator = () => {
  const userId = useSelector((state) => state.auth.userId);
  return (
    <NavigationContainer>
      {userId ? <BottomtabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default MainNavigator;
