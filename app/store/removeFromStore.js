import AsyncStorage from "@react-native-async-storage/async-storage";

const removeFromStore = async (id) => {
  try {
    await AsyncStorage.removeItem(id);
  } catch (error) {
    console.log(error);
  }
};

export default removeFromStore;
