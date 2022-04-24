import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import CarItem from "./components/CarItems";
export default function App() {
  return (
    <View style={styles.container}>
      <CarItem
        name={"Model S"}
        tagLine={"Order Online For"}
        taglineCta={"Touchless Delivery"}
        image={require("./assets/images/ModelS.jpeg")}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
