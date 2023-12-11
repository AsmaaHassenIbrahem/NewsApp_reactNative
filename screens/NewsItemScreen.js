import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import { useAppContext } from "../storage/AppProvider";

function NewsItemScreen({ title, image, onPress }) {
  const { theme } = useAppContext();

  return (
    <View
      style={[
        styles.cardContainer,
        {
          backgroundColor: theme.primary,
          shadowColor: theme.secondry,
        },
      ]}
    >
      <Pressable onPress={onPress}>
        <View>
          <Image style={styles.imageStyle} source={{ uri: image }} />

          <Text
            style={[
              styles.textStyle,
              { borderColor: theme.secondry, color: theme.text },
            ]}
          >
            {title}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

export default NewsItemScreen;

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 8,
    padding: 16,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 10, // Required for Android
    flexDirection: "row",
    margin: 10,
  },

  textStyle: {
    maxWidth: "80%",
    flex: 1,
    flexWrap: "wrap",
  },
  imageStyle: {
    resizeMode: "contain",
    height: 100,
    width: 200,
  },
});
