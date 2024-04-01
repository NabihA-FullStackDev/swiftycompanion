import axios from "axios";

<<<<<<< HEAD
const getUserById = async (id, token) => {
  const requestUrl = `v2/users/${id}`;
=======
const getUserById = async (id, token, setProfile) => {
  const requestUrl = "v2/users" + id;
>>>>>>> 386e34e (header profile ok search screen)
  try {
    const res = await axios.get(requestUrl, {
      headers: {
        "Content-Type": "application/vnd.api+json",
        Authorization: "Bearer " + token,
      },
    });
    const data = await res.data;
    if (res.status === 200) {
<<<<<<< HEAD
      return data;
=======
      setProfile(data);
>>>>>>> 386e34e (header profile ok search screen)
    } else {
      console.log("error");
    }
  } catch (error) {
<<<<<<< HEAD
    if (error.response?.status === 429) {
      return getUserById(id, token);
    }
    console.log("getUserById", error);
=======
    console.log(error);
>>>>>>> 386e34e (header profile ok search screen)
  }
};

export default getUserById;
