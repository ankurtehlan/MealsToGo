import React from "react";
import { Text } from "react-native";

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    Photos = [""],
    address = "12 Some Random Street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

return <Text>{name}</Text>;
};
