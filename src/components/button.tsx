import { Pressable, StyleSheet, Text, TouchableOpacity } from "react-native";

interface IButton {
  text: string;
  variant?: "filled" | "outlined";
  color?: string;
  textColor?: string;
  onPress: () => void;
}

export function ButtonComponent(props: IButton) {
  const { text, variant, color, textColor, onPress } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={s({ color, textColor, variant }).button}
    >
      <Text style={s({ color, textColor, variant }).text}>{text}</Text>
    </TouchableOpacity>
  );
}

interface IButtonProps {
  color?: string;
  textColor?: string;
  variant?: "filled" | "outlined";
}
const s = (props: IButtonProps) =>
  StyleSheet.create({
    button: {
      backgroundColor:
        props.variant === "filled" ? props.color ?? "#131313" : "transparent",
      padding: 16,
      borderWidth: props.variant === "filled" ? 0 : 2,
      borderColor:
        props.variant === "outlined" ? props.color ?? "#131313" : "transparent",
      borderRadius: 15,
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      color:
        props.variant === "filled"
          ? props.textColor ?? "#FFFFFF"
          : props.textColor ?? "#131313",
      fontSize: 20,
      fontWeight: "500",
    },
  });
