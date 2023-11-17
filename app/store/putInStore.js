import AsyncStorage from "@react-native-async-storage/async-storage";

const putInStore = async (id, data) => {
  try {
    await AsyncStorage.setItem(id, data);    
  } catch (error) {
    console.log(error);
  }
};

export default putInStore;
