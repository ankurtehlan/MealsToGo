import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "../components/restaurant-info.components";

export const RestaurantsScreen = () => {
  const [search, setSearch] = useState(null);

  const onChangeSearch = (value) => {
    setSearch(value);
  };

  
  return (
    <>
      <View style={styles.firstView}>
        <Searchbar placeholder="Search" onChangeText={onChangeSearch} />
      </View>
      <View style={styles.secondView}>
        <Text>{search}</Text>
      </View>
      <View>
        <RestaurantInfo />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  firstView: {
    backgroundColor: "#23241f",
    padding: 10,
    marginTop: StatusBar.currentHeight,
  },
  secondView: {
    backgroundColor: "blue",
    flex: 1,
  },
});
