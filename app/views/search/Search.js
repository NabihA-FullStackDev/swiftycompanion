import { StyleSheet, SafeAreaView } from 'react-native'
import { Stack, useLocalSearchParams } from "expo-router";

const Search = () => {
  return (
    <SafeAreaView>
        <Stack.Screen options={{ 
        headerShadowVisible: false,
        headerTitle: "Recherche"
       }}/>
    </SafeAreaView>
  )
}

export default Search

const styles = StyleSheet.create({})