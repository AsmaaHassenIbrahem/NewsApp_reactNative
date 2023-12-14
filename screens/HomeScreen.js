import { StyleSheet, View, FlatList, Text } from "react-native";
import { Strings } from "../utilities/String";
import { useState } from "react";
import NewsItemScreen from "./NewsItemScreen.js";
import SearchBar from "react-native-material-design-searchbar";
import { useAppContext } from "../storage/AppProvider";
import getNewsDataApi from "../api/getNewsDataApi";
import { useTranslation } from "react-i18next";

function HomeScreen({ navigation }) {
  const { theme } = useAppContext();

  const [search, setSearch] = useState("");
  const { t } = useTranslation();

  const { response, loading, error } = getNewsDataApi(Strings.API_KET);

  function renderDataItem(itemData) {
    function pressHandler() {
      navigation.navigate(Strings.details, { item: itemData.item});
    }

    return (
      <NewsItemScreen
        title={itemData.item.title}
        image={itemData.item.urlToImage}
        onPress={pressHandler}
      />
    );
  }

  if(loading){
    return(
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        <Text> Loading ...</Text>
        </View>

    )
  }

  if(error){
    return(
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        <Text> {error.toString()}</Text>
        </View>

    )
  }
  
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <SearchBar
        onSearchChange={(text) => setSearch(text)}
        height={50}
        placeholder={t(Strings.searchPlaceHolder)}
        autoCorrect={false}
        padding={5}
        iconColor={theme.secondry}
        placeholderColor={theme.text}
        textStyle={{ color: theme.text }}
        returnKeyType={"search"}
      />

      <FlatList
        alwaysBounceVertical={false}
        data={response.filter(
          (newData) => search == "" || newData.title.indexOf(search) > -1
        )}
        keyExtractor={(item, i) => i}
        renderItem={renderDataItem}
      />
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    padding: 20,
  },
});
