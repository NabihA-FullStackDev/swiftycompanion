import AsyncStorage from "@react-native-async-storage/async-storage";

const removeFromStore = async (id) => {
  await AsyncStorage.removeItem(id);
};

export default removeFromStore;
