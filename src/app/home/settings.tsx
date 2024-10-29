import { LoginFormComponent } from "@/src/components/loginForm";
import { Link } from "expo-router";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <SafeAreaView style={s.safeArea}>
      <View style={s.container}>
        <Text>SETTINGS</Text>
      </View>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#e8ecf4",
    width: "100%",
    padding: 50,
  },
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    width: "100%",
    height: "100%",
  },
  content: {
    width: "100%",
  },
  header: {
    display: "flex",
    alignItems: "center",
    marginBottom: 30,
    marginTop: 60,
  },
  headerImg: {
    width: 80,
    height: 80,
    marginBottom: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: "500",
    color: "#312f3d",
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "400",
    color: "#929292",
    marginTop: 10,
  },
});
