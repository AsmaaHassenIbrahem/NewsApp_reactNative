
import { StyleSheet} from "react-native";
import { useTranslation } from "react-i18next";
import { NavigationContainer } from "@react-navigation/native";
import DetailsNewsScreen from "./DetailsNewsScreen";
import TabScreens from "./TabScreens";
import { Strings } from "../utilities/String";
import { useAppContext } from "../storage/AppProvider";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

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

  export default MainNavigation

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center",
    },
  });
  
