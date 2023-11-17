import AsyncStorage from "@react-native-async-storage/async-storage";

const putInStore = async (id, data) => {
  try {
    const dataJsoned = JSON.stringify(data);
    await AsyncStorage.setItem(id, dataJsoned);    
  } catch (error) {
    console.log(error);
  }
};

export default putInStore;
