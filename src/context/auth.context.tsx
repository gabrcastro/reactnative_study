import React, { useEffect, useState } from "react";
import { Auth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthEnum } from "../data/enums";
import { router } from "expo-router";

interface ISignin {
  email: string;
  password: string;
}

const AuthContext = React.createContext<{
  signIn: (props: ISignin) => Promise<void>;
  signOut: () => void;
  session?: AuthEnum;
  isLoading: boolean;
}>({
  signIn: async () => {},
  signOut: () => null,
  session: AuthEnum.NOT_AUTHENTICATED,
  isLoading: false,
});

export function useSession() {
  return React.useContext(AuthContext);
}

export function SessionProvider(props: React.PropsWithChildren) {
  const [session, setSession] = useState<AuthEnum>(AuthEnum.NOT_AUTHENTICATED);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      const existingSession = await AsyncStorage.getItem("session");
      console.log(`Session: ${existingSession}`);
      setSession(
        existingSession === AuthEnum.AUTHENTICATED
          ? AuthEnum.AUTHENTICATED
          : AuthEnum.NOT_AUTHENTICATED
      );
      setIsLoading(false);
    };

    checkSession();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      if (session === AuthEnum.AUTHENTICATED) {
        router.replace("/home");
      } else {
        router.replace("/auth");
      }
    }
  }, [session, isLoading]);

  async function signIn({ email, password }: ISignin): Promise<void> {
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredentials.user;
      console.log(user);
      setSession(AuthEnum.AUTHENTICATED);
      await AsyncStorage.setItem("session", AuthEnum.AUTHENTICATED);
    } catch (err) {
      console.error(err);
      alert("Failed to log in with provided credentials.");
      throw new Error();
    }
  }

  async function signOut() {
    setSession(AuthEnum.NOT_AUTHENTICATED);
    await AsyncStorage.removeItem("session");
  }

  return (
    <AuthContext.Provider value={{ signIn, signOut, session, isLoading }}>
      {props.children}
    </AuthContext.Provider>
  );
}
