import { FlatList } from "react-native";
import { useState, useEffect } from "react";
import { CardHorizontalFood } from "./food";

export function TrendingFoods() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    async function getFoods() {
      const response = await fetch("http://localhost:3000/foods");
      const data = response.json();
    }

    getFoods();
  }, []);

  return (
    <FlatList data={foods} renderItem={({ item }) => <CardHorizontalFood />} />
  );
}
