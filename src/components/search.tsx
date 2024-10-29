import { transform } from "@babel/core";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

export function SearchInput() {
  const [text, setText] = useState<string>("");

  return (
    <View style={s.container}>
      <MaterialIcons name="search" size={20} color={"#7E7E7E"} />
      <TextInput
        style={s.input}
        placeholder="Procure sua comida"
        placeholderTextColor={"#8F8F8F"}
        value={text}
        onChangeText={(text) => setText(text)}
      ></TextInput>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    width: "100%",
    height: 55,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor: "transparent",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#CCCCCC",
  },
  input: {
    height: 55,
    width: "100%",

    color: "#131313",
    fontSize: 16,
    lineHeight: 24,
  },
});
