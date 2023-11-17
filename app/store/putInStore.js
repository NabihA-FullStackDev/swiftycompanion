import AsyncStorage from "@react-native-async-storage/async-storage";

const putInStore = async (id, data) => {
  await AsyncStorage.setItem(id, data);
};

export default putInStore;
