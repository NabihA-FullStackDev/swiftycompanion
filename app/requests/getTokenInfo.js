import axios from "axios";

const getTokenInfo = async (token) => {
  try {
    const res = await axios.get('https://api.intra.42.fr/oauth/token/info', {
      headers: {
        "Content-Type": "application/vnd.api+json",
        Authorization: 'Bearer ' + token,
      },
    });
    const data = await res.data;
    if (res?.status === 200) {
      return (data?.expires_in_seconds);
    } else {
      console.log("error");
    }
  } catch (error) {
    console.log(error);
  }
};

export default getTokenInfo;