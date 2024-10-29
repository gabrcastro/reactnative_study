import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { FoodItem } from "./foodItem";

export interface IFood {
  id: string;
  name: string;
  price: number;
  time: string;
  delivery: number;
  rating: number;
  image: string;
  restaurantId: string;
}

export function TrandingFood() {
  const [foods, setFoods] = useState<IFood[]>([]);

  useEffect(() => {
    async function getFood() {
      const response = await fetch("http://192.168.0.12:3000/foods");
      const data: IFood[] = await response.json();
      setFoods(data);
    }

    getFood();
  });

  return (
    <FlatList
      data={foods}
      horizontal
      contentContainerStyle={{ gap: 5, paddingLeft: 20, paddingRight: 20 }}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <View style={{ marginRight: 10 }}>
          <FoodItem food={item} />
        </View>
      )}
    />
  );
}
