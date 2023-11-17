import AsyncStorage from "@react-native-async-storage/async-storage";

const getFromStore = async (id) => {
  try {
    const data = await AsyncStorage.getItem(id);
    if (data !== NULL) {
      const dataUnJsoned = JSON.parse(data);
      return dataUnJsoned;
    }
  } catch (error) {
    console.log(error);
  }
};

export default getFromStore;
