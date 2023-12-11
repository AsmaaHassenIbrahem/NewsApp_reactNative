import { View, Text, Pressable , StyleSheet , Image} from "react-native";
import { useAppContext } from "../storage/AppProvider";

function DetailsNewsScreen({ route }) {
  const item = route.params.item;


  const { theme } = useAppContext();
  return (
    <View style={styles.container}>
      <Pressable>
        <View >
        
        <Image style={styles.imageStyle} source={{ uri: item.urlToImage }} />
          <Text style={{ color: theme.text }}>{item.title}</Text>
          <Text style={{ color: theme.text }}>{item.description}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default DetailsNewsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    padding: 20,
  },

  detailsStyle: {
    paddingTop: 30,
    padding: 20,
    flexDirection: 'column',
  },
  imageStyle: {

    resizeMode: "contain",
    height: 200,
    width: 200,
    flexWrap: "wrap",

  },
});