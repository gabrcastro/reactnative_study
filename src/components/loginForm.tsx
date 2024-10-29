import { StyleSheet, View } from "react-native";
import { InputComponent } from "./input";
import { ButtonComponent } from "./button";
import { useState } from "react";
import { useSession } from "../context/auth.context";

export function LoginFormComponent() {
  const { signIn } = useSession();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSignIn = async () => {
    try {
      await signIn({ email, password });
    } catch (error) {
      console.error("Login failed", error);
    }
  };

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
      <View style={s.spacer} />
      <ButtonComponent
        onPress={handleSignIn}
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
    marginTop: 10,
  },
});
