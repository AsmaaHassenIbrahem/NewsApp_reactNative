import { StatusBar } from "expo-status-bar";
import { Fragment } from "react";
import { AppProvider } from "./storage/AppProvider";
import MainNavigation from "./screens/MainNavigation";

export default function App() {
  return (
    <Fragment>
    <AppProvider>
      <StatusBar style="dark" />
      <MainNavigation></MainNavigation>
    </AppProvider>
    </Fragment>
  );
}
