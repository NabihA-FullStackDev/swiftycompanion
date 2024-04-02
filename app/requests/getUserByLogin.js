import axios from "axios";

<<<<<<< HEAD
const getUserByLogin = async (login, token) => {
=======
const getUserByLogin = async (login, token, setProfile) => {
<<<<<<< HEAD
>>>>>>> 386e34e (header profile ok search screen)
=======
>>>>>>> 31aa7f0 (header profile ok search screen)
>>>>>>> ffaf808 (header profile ok search screen)
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
<<<<<<< HEAD
      return data[0].id;
    } else {
      console.log(res.status);
    }
  } catch (error) {
    if (error.response?.status === 429) {
      return getUserByLogin(login, token);
    }
    console.log('getUserByLogin', error);
=======
      setProfile(data);
    } else {
      console.log("error");
    }
  } catch (error) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    console.log(error);
>>>>>>> 386e34e (header profile ok search screen)
=======
    if (error.message.split(" ").slice(-1)[0] === "429") {
      return getUserByLogin(login, token);
    }
    console.log('getUserByLogin', error);
>>>>>>> 4e95064 (Renew request for 429, add anti spam, better loading)
=======
    console.log(error);
>>>>>>> 31aa7f0 (header profile ok search screen)
>>>>>>> ffaf808 (header profile ok search screen)
=======
    console.log(error);
>>>>>>> 31aa7f0 (header profile ok search screen)
=======
    if (error.message.split(" ").slice(-1)[0] === "429") {
      return getUserByLogin(login, token);
    }
    console.log('getUserByLogin', error);
>>>>>>> 8539d30 (Renew request for 429, add anti spam, better loading)
>>>>>>> 0fb997a (Renew request for 429, add anti spam, better loading)
  }
};

export default getUserByLogin;
