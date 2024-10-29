import { Pressable, StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export function HeaderComponent() {
  return (
    <View style={s.container}>
      <Pressable style={s.button}>
        <MaterialIcons name="menu" size={24} color={"#131313"} />
      </Pressable>

      <Pressable style={s.location}>
        <Text style={s.textLocation}>Location</Text>
        <View style={s.sublocation}>
          <MaterialIcons name="location-pin" size={15} color={"#D3031C"} />
          <Text style={s.textSublocation}>Campo Grande</Text>
        </View>
      </Pressable>

      <Pressable style={s.button}>
        <MaterialIcons name="notifications-none" size={24} color={"#131313"} />
      </Pressable>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#FFFFFF",
    borderRadius: 50,
    padding: 10,
  },
  location: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
  },
  sublocation: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },
  textLocation: {
    fontSize: 14,
    fontWeight: "400",
    color: "#7A7A7A",
  },
  textSublocation: {
    fontSize: 16,
    fontWeight: "600",
    color: "#131313",
  },
});
