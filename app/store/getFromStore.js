import AsyncStorage from "@react-native-async-storage/async-storage";

const getFromStore = async (id) => {
  return await AsyncStorage.getItem(id);
};

export default getFromStore;
