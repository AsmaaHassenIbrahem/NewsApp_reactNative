import { StatusBar } from "expo-status-bar";
import MainNavigation from "./screens/MainNavigation";
import { AppProvider } from "./storage/AppProvider";

export default function App() {
  return (

    <AppProvider>
      <StatusBar style="dark" />
      <MainNavigation></MainNavigation>
    </AppProvider>
  );
}