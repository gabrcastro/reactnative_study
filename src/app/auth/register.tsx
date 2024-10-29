import { RegisterFormComponent } from "@/src/components/registerForm";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function Register() {
  return (
    <SafeAreaView style={s.safeArea}>
      <View style={s.container}>
        <View style={s.header}>
          <Image
            source={{ uri: "https://withfra.me/android-chrome-512x512.png" }}
            style={s.headerImg}
            alt="Logo"
          />
          <Text style={s.title}>Sign in to my new app</Text>
          <Text style={s.subtitle}>Access all your coins here</Text>
        </View>

        <RegisterFormComponent />
      </View>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#e8ecf4",
  },
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
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
