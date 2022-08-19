import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";

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
