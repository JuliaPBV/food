import { View, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

export function Search() {
  return (
    <View>
      <Feather name="search" size={24} color="#64748b" />
      <TextInput placeholder="Procure sua comida..." />
    </View>
  );
}
