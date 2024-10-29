import { Slot } from "expo-router";
import { SessionProvider, useSession } from "../context/auth.context";
import { SplashScreen } from "./splash";

import "@/src/global.css";

export default function RootLayout() {
  return (
    <SessionProvider>
      <RootLayoutContent />
    </SessionProvider>
  );
}

function RootLayoutContent() {
  const { isLoading } = useSession();

  if (isLoading) {
    return <SplashScreen />;
  }

  return <Slot />;
}
