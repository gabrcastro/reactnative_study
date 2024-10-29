import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

interface IInput {
  label: string;
  placeholder: string;
  isPassword?: boolean;
  value: string;
  setValue: (value: string) => void;
}

export function InputComponent(props: IInput) {
  const { label, placeholder, value, setValue } = props;

  return (
    <View style={s.container}>
      <Text style={s.label}>{label}</Text>
      <TextInput
        style={s.input}
        value={value}
        onChangeText={(text) => setValue(text)}
        placeholder={placeholder}
        secureTextEntry={props.isPassword}
      />
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 5,
  },
  input: {
    width: "100%",
    height: 55,
    backgroundColor: "white",
    borderRadius: 15,
    marginBottom: 10,
    paddingHorizontal: 10,
    fontSize: 16,
    lineHeight: 24,
  },
});
