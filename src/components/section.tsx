import { ReactNode } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SectionTypeEnum } from "../data/enums";

interface ISection {
  title: string;
  type: SectionTypeEnum;
  children: ReactNode;
  suffixText?: string;
  showSuffixText?: boolean;
  suffixAction?: () => void;
}

export function Section({
  title,
  type,
  children,
  suffixText,
  showSuffixText,
  suffixAction,
}: ISection) {
  return (
    <View style={s.container}>
      <View style={s.header}>
        <Text
          style={{
            fontSize: type == SectionTypeEnum.DEFAULT ? 18 : 20,
            fontWeight: "600",
          }}
        >
          {title}
        </Text>
        {showSuffixText && (
          <Pressable onPress={suffixAction}>
            <Text style={s.suffix}>{suffixText}</Text>
          </Pressable>
        )}
      </View>
      {children}
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 10,
    paddingTop: 30,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 5,
  },
  suffix: {
    fontSize: 13,
    fontWeight: "400",
    color: "#969696",
  },
});
