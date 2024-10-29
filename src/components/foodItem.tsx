import {
  Image,
  ListRenderItemInfo,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { IFood } from "./trandingFood";
import { MaterialIcons } from "@expo/vector-icons";

export function FoodItem({ food }: { food: IFood }) {
  return (
    <Pressable style={s.container}>
      <View style={s.imageContainer}>
        <Image style={s.image} source={{ uri: food.image }} />
        <View style={s.rating}>
          <MaterialIcons name="star-rate" size={15} color={"#E4BC0B"} />
          <Text style={s.ratingText}>{food.rating}</Text>
        </View>
      </View>
      <View style={s.footerContainer}>
        <View style={s.prices}>
          <Text style={s.price}>R$ 39,90</Text>
          <Text style={s.oldPrice}>R$ 39,90</Text>
        </View>
        <Text style={s.name}>Frango Assado</Text>
        <Text style={s.time}>50 - 40 min - R$8,99</Text>
      </View>
    </Pressable>
  );
}

const s = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  imageContainer: {
    width: 170,
    height: 140,
    borderRadius: 15,
    marginBottom: 6,
    position: "relative",
  },
  image: {
    width: 170,
    height: 140,
    borderRadius: 15,
    backgroundColor: "#DEDEDE",
  },
  rating: {
    position: "absolute",
    top: 0,
    right: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 10,
    marginRight: 10,
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 10,
    backgroundColor: "#131313",
  },
  ratingText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "400",
  },
  footerContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: 3,
    marginLeft: 3,
  },
  prices: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 2,
  },
  price: {
    fontSize: 16,
    fontWeight: "600",
    color: "#005C08",
  },
  oldPrice: {
    fontSize: 14,
    fontWeight: "400",
    color: "#868686",
    textDecorationLine: "line-through",
  },
  name: {
    fontSize: 14,
    fontWeight: "600",
    color: "#131313",
    marginBottom: 3,
  },
  time: {
    fontSize: 12,
    fontWeight: "400",
    color: "#868686",
  },
});
