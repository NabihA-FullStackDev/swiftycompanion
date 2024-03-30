import axios from "axios";

const getMe = async (token, setProfile) => {
  const requestUrl = "v2/me";
  try {
    const res = await axios.get(requestUrl, {
      headers: {
        "Content-Type": "application/vnd.api+json",
        Authorization: "Bearer " + token,
        // access_token: token,
      },
    });
    const data = await res.data;
    if (res.status === 200) {
      setProfile(data);
    } else {
      console.log("error");
    }
  } catch (error) {
    console.log(error);
  }
};

export default getMe;
