import { Pressable, View, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { FoodProps } from "../";

export function CardHorizontalFood({ food }: { food: FoodProps }) {
  return (
    <Pressable className="flex flex-col rounded-xl">
      <Image source={{ uri: food.image }} className="w-44 h-36 rounded-xl" />
      <Text>{food.name}</Text>
    </Pressable>
  );
}
