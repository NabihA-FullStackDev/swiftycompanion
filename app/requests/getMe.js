import axios from "axios";

const getMe = async (token) => {
  const requestUrl = "v2/me";
  try {
    const res = await axios.get(requestUrl, {
      headers: {
        "Content-Type": "application/vnd.api+json",
        Authorization: "Bearer " + token,
        // access_token: token,
      },
    });
    if (res.status === 200) {
      console.log(res);
    } else {
      console.log("error");
    }
  } catch (error) {
    console.log(error);
  }
};

export default getMe;
