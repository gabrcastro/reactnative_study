// SplashScreen.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export function SplashScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.loadingText}>Loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff", // Cor de fundo
  },
  loadingText: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
