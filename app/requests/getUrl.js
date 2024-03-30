import axios from "axios";

const getUrl = async (requestUrl, token, setter, params = {}) => {
  try {
    const res = await axios.get(requestUrl, {
      headers: {
        "Content-Type": "application/vnd.api+json",
        Authorization: "Bearer " + token,
      },
      ...params,
    });
<<<<<<< HEAD
    if (res.status !== 200) {
=======
    const data = await res.data;
    if (res.status === 200) {
      console.log(data);
    } else {
>>>>>>> 934d90e (Review views (Login/NavBar profile/Search))
      console.log("error");
      throw new Error("User not found");
    }
    // console.log('user data = ', res.data);
    await setter(res.data);
    // return (data);
  } catch (error) {
    console.log("Catched error in getUrl:");
    console.log(error.stack);
  }
};

export default getUrl;
