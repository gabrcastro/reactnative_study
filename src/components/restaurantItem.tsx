import { MaterialIcons } from "@expo/vector-icons";
import {
  Image,
  ImageProps,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { IRestaurants } from "./restaurants";

export function RestaurantItem({ restaurant }: { restaurant: IRestaurants }) {
  // if (points) {
  //   return (
  //     <View style={s.containerPoints}>
  //       <View style={s.image}></View>
  //       <View style={s.column}>
  //         <Text style={s.title}>{name}</Text>

  //         <View style={s.points}>
  //           <MaterialIcons name="star-rate" size={20} color={"#E4BC0B"} />
  //           <Text style={s.pointsText}>{points}</Text>
  //         </View>
  //       </View>
  //     </View>
  //   );
  // }

  return (
    <View style={s.container}>
      <Image style={s.image} source={{ uri: restaurant.image }} />
      <Text style={s.title}>{restaurant.name}</Text>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 5,
    gap: 6,
  },
  containerPoints: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 5,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 100,
  },
  title: {
    color: "#131313",
    fontSize: 15,
    fontWeight: "bold",
  },
  column: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginLeft: 10,
  },
  points: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginLeft: -3,
    marginTop: 5,
  },
  pointsText: {
    color: "#616161",
    fontSize: 14,
    fontWeight: "300",
  },
});
