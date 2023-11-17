import axios from "axios";

const getUrl = async (requestUrl, token, params={}) => {
  try {
    const res = await axios.get(requestUrl, {
      headers: {
        "Content-Type": "application/vnd.api+json",
        Authorization: 'Bearer ' + token,
      },
      ...params,
    });
    if (res.status === 200) {
      return (JSON(res.data));
    } else {
      console.log("error");
    }
  } catch (error) {
    console.log(error);
  }
};

export default getUrl;
