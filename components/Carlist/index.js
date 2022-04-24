import { View, Text, FlatList, Dimensions } from "react-native";
import CarItems from "../CarItems";
import styles from "./styles";
import cars from "./cars";
import React from "react";

const CarsList = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({ item }) => <CarItems car={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
      />
    </View>
  );
};

export default CarsList;
