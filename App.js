import { SafeAreaView, StyleSheet } from "react-native";
import MainNavigator from "./navigation";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { init } from "./db";

init()
  .then(() => console.log("Database initialized."))
  .catch((err) => {
    console.log("Database fail connection: " + err.message);
  });

export default function App() {

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <MainNavigator />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
