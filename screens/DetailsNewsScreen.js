import { View , Text, Pressable} from "react-native"

function DetailsNewsScreen({route}){
  //  const cardId = route.params.itemId;
    const title = route.params.title

    return (
        <View>
            <Pressable>
                <View>
                    <Text>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
}

export default DetailsNewsScreen