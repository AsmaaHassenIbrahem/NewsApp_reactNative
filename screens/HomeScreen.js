import { StyleSheet, View, Text, FlatList } from "react-native";
import { Strings } from "../utilities/String";
import { useState, useEffect } from "react";
import NewsItemScreen from "./NewsItemScreen.js";
import UseAxios from "../hooks/UseAxios";
import SearchBar from "react-native-material-design-searchbar";
import { useAppContext } from '../storage/AppProvider';

function HomeScreen({ navigation }) {
  const { theme } = useAppContext();

  const [search, setSearch] = useState("");

  const { newsData, loading, error } = UseAxios();

  function renderDataItem(itemData) {
    function pressHandler() {
      navigation.navigate(Strings.details, { title: itemData.item.title });
    }

    return (
      <NewsItemScreen
        title={itemData.item.title}
        image = {itemData.item.urlToImage}
        onPress={pressHandler}
      />
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <SearchBar
        onSearchChange={(text) => setSearch(text)}
        height={50}
        placeholder={"Search..."}
        autoCorrect={false}
        padding={5}
        iconColor={theme.secondry}
        placeholderColor={theme.secondry}
        returnKeyType={"search"}
      />

<FlatList alwaysBounceVertical={false} d
ata={newsData.filter(newData => search == "" || newData.title.indexOf(search) > -1)}
 keyExtractor={(item, i) => i}
      renderItem={renderDataItem}/>
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