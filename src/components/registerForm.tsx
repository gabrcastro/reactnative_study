import { Button, StyleSheet, View } from "react-native";
import { InputComponent } from "./input";
import { ButtonComponent } from "./button";
import { Component, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "@/src/config/firebase";
import { router } from "expo-router";

export function RegisterFormComponent() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  async function register() {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredentials.user;
      console.log(user);
      if (user) router.push("/home");
      return user;
    } catch (err) {
      console.error(err);
      alert("Failed to create account with provided credentials.");
      throw new Error();
    }
  }

  return (
    <View style={s.form}>
      <InputComponent
        value={email}
        setValue={setEmail}
        label="Email address"
        placeholder="Type your email"
      />
      <InputComponent
        value={password}
        setValue={setPassword}
        label="Password"
        placeholder="Type your password"
        isPassword
      />
      <InputComponent
        value={confirmPassword}
        setValue={setConfirmPassword}
        label="Confirm Password"
        placeholder="Type your password"
        isPassword
      />
      <ButtonComponent
        onPress={register}
        text="Login"
        variant="filled"
        color="#075eec"
        textColor="#FFFFFF"
      />
    </View>
  );
}

const s = StyleSheet.create({
  form: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  spacer: {
    letterSpacing: 20,
  },
});
