import { View, Text, StyleSheet } from "react-native";
import { Strings } from "../utilities/String";
import { Switch } from "react-native-switch";
import { useAppContext } from "../storage/AppProvider";
import { useTranslation } from "react-i18next";

function SettingsScreen() {
  const { t } = useTranslation();
  const { language, darkMode, theme, toggleLanguage, toggleDarkMode } =
    useAppContext();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.toogleContainerStyle}>
        <Text style={[styles.TextStyle, { color: theme.text }]}>
          {t(Strings.textToogleThemeMood)}
        </Text>
        <Switch
          activeText={t(Strings.dark)}
          inActiveText={t(Strings.Light)}
          circleActiveColor= {theme.background }
          backgroundActive={theme.secondry}
          onValueChange={() => toggleDarkMode()}
          circleBorderWidth={2}
          switchWidthMultiplier={5}
          value={darkMode}
        />
      </View>

      <View style={styles.toogleContainerStyle}>
        <Text style={[styles.TextStyle, { color: theme.text }]}>
          {" "}
          {t(Strings.textToggleLanguage)}
        </Text>
        <Switch
          activeText={t(Strings.arabic)}
          inActiveText={t(Strings.english)}
          onValueChange={() => toggleLanguage()}
          backgroundActive={theme.secondry}
          circleBorderWidth={2}
          switchWidthMultiplier={5}
          value={language == Strings.enKey}
        />
      </View>
    </View>
  );
}

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    padding: 20,
    alignContent: "center",
  },
  TextStyle: {
    margin: 20,
    alignItems: "center",
    fontSize: 15,
    fontWeight: "bold",
  },
  toogleContainerStyle: {
    marginBottom: 50,
    alignItems: "center",
  },
  cardContainer: {
    flex: 1,
    flexDirection: "row",
  },
  card_template: {
    width: 250,
    height: 250,
    boxShadow: "10px 10px 17px -12px rgba(0,0,0,0.75)",
  },

  text_container: {
    position: "absolute",
    bottom: 0,
    padding: 5,
    fontSize: 20,
    backgroundColor: "rgba(0,0,0, 0.3)",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
