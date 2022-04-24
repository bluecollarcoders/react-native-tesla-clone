import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  carContainer: {
    width: "100%",
    height: Dimensions.get("window").height,
  },
  titles: {
    marginTop: "30%",
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "600",
  },
  subTitle: {
    fontSize: 20,
    color: "#5c5e62",
  },
  Image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    position: "absolute",
  },

  buttonContainer: {
    position: "absolute",
    bottom: 50,
    width: "100%",
  },
  taglineCta: {
    textDecorationLine: "underline",
  },
});

export default styles;
