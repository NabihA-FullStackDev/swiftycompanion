import axios from "axios";

const getUserByLogin = async (login, token) => {
  const requestUrl = "v2/users";
  try {
    const res = await axios.get(requestUrl, {
      headers: {
        "Content-Type": "application/vnd.api+json",
        Authorization: "Bearer " + token,
      },
      params: {
        filter: {
          login: login
        }
      }
    });
    const data = await res.data;
    if (res.status === 200) {
      return data[0].id;
    } else {
      console.log("error");
    }
  } catch (error) {
    if (error.message.split(" ").slice(-1)[0] === "429") {
      return getUserByLogin(login, token);
    }
    console.log('getUserByLogin', error);
  }
};

export default getUserByLogin;
