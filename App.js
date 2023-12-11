import "./localization/i18next";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import { useTranslation } from "react-i18next";
import { NavigationContainer } from "@react-navigation/native";
import DetailsNewsScreen from "./screens/DetailsNewsScreen";
import TabScreens from "./screens/TabScreens";
import { Strings } from "./utilities/String";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppProvider, useAppContext } from "./storage/AppProvider";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AppProvider>
      <StatusBar style="dark" />
      <MainNavigation></MainNavigation>
    </AppProvider>
  );
}
function MainNavigation() {
  const { theme } = useAppContext();
  const { t } = useTranslation();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: theme.primary },
          headerTintColor: theme.secondry,
          contentStyle: { backgroundColor: theme.background },
        }}
      >
        <Stack.Screen
          name={Strings.tabs}
          component={TabScreens}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={Strings.details}
          component={DetailsNewsScreen}
          options={{
            title: t("details"),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
