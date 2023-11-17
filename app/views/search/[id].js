import { SafeAreaView, Text } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";

const SearchResult = () => {
  const params = useLocalSearchParams();

  return (
    <SafeAreaView>
        <Stack.Screen options={{ 
        headerShadowVisible: false,
        headerTitle: "Resultat"
       }}/>
    </SafeAreaView>
  );
};

export default SearchResult;
