import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from "./HomeScreen";
import SettingsScreen from "./SettingsScreen";
import { Strings } from "../utilities/String";
import { useAppContext } from "../storage/AppProvider";
import { useTranslation } from "react-i18next";

const Tab = createMaterialBottomTabNavigator();

function TabScreens() {
  const { theme } = useAppContext();
  const { t } = useTranslation();
//test;;;;;;;;;;;ppooikooio
  return (
    <Tab.Navigator
      initialRouteName={Strings.home}
      activeColor={theme.secondry}
      barStyle={{ backgroundColor: theme.primary }}
    >
      <Tab.Screen
        name={Strings.home}
        component={HomeScreen}
        options={{
          tabBarLabel: t(Strings.home),
          tabBarIcon: ({ color }) => (
            <Ionicons name={Strings.home} color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name={Strings.settings}
        component={SettingsScreen}
        options={{
          tabBarLabel: t(Strings.settings),
          tabBarIcon: ({ color }) => (
            <Ionicons name={Strings.settings} color={color} size={20} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabScreens;
