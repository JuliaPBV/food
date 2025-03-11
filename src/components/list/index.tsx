import { View, Text } from "react-native";
import { useState, useEffect } from "react";

export interface RestaurantsProps {
  id: string;
  name: string;
  image: string;
}

export default function List() {
  const [restaurants, setRestauants] = useState<RestaurantsProps[]>();

  useEffect(() => {
    async function getFoods() {
      const response = await fetch("http://192.168.0.92:3000/restaurants");
      const data = await response.json();
      setRestauants(data);
    }

    getFoods();
  }, []);

  return (
    <View>
      <Text>TESTe</Text>
    </View>
  );
}
