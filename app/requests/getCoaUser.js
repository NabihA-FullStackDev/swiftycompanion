import axios from "axios";
import selectBackground from "../utils/selectBackground";

const getCoaUser = async (id, token, setCoa) => {
  const requestUrl = "v2/users/" + id + "/coalitions_users";
  try {
    const res = await axios.get(requestUrl, {
      headers: {
        "Content-Type": "application/vnd.api+json",
        Authorization: "Bearer " + token,
      },
    });
    const data = await res.data[0].coalition_id;
    if (res.status === 200) {
<<<<<<< HEAD
      await setCoa(selectBackground(data));
=======
        await setCoa(selectBackground(data));
<<<<<<< HEAD
>>>>>>> 386e34e (header profile ok search screen)
=======
>>>>>>> 31aa7f0 (header profile ok search screen)
>>>>>>> ffaf808 (header profile ok search screen)
    } else {
      console.log("error");
    }
  } catch (error) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ffaf808 (header profile ok search screen)
=======
>>>>>>> 0fb997a (Renew request for 429, add anti spam, better loading)
    if (error.response?.status === 429) {
      getCoaUser(id, token, setCoa);
    } else console.log("getCoaUser", error.response.status);
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fb997a (Renew request for 429, add anti spam, better loading)
=======
    if (error.message.split(" ").slice(-1)[0] === "429") {
      getCoaUser(id, token, setCoa);
    }
<<<<<<< HEAD
>>>>>>> 4e95064 (Renew request for 429, add anti spam, better loading)
    console.log(error);
>>>>>>> 386e34e (header profile ok search screen)
=======
=======
>>>>>>> 8539d30 (Renew request for 429, add anti spam, better loading)
>>>>>>> 0fb997a (Renew request for 429, add anti spam, better loading)
    console.log(error);
>>>>>>> 31aa7f0 (header profile ok search screen)
>>>>>>> ffaf808 (header profile ok search screen)
  }
};

export default getCoaUser;
