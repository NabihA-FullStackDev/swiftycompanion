import AsyncStorage from "@react-native-async-storage/async-storage";

const getFromStore = async (id) => {
  try {
    const data = await AsyncStorage.getItem(id);
    if (data !== NULL) return data;
  } catch (error) {
    console.log(error);
  }
};

export default getFromStore;
