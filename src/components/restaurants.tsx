import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { RestaurantItem } from "./restaurantItem";

export interface IRestaurants {
  id: string;
  name: string;
  image: string;
}
export function Restaurants() {
  const [restaurants, setRestaurants] = useState<IRestaurants[]>([]);

  useEffect(() => {
    async function getFood() {
      const response = await fetch("http://192.168.0.12:3000/restaurants");
      const data: IRestaurants[] = await response.json();
      setRestaurants(data);
    }

    getFood();
  });

  return (
    <FlatList
      data={restaurants}
      horizontal
      contentContainerStyle={{ gap: 5, paddingLeft: 20, paddingRight: 20 }}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <View style={{ marginRight: 10 }}>
          <RestaurantItem restaurant={item} />
        </View>
      )}
    />
  );
}
