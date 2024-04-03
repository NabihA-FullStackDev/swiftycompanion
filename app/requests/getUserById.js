import axios from "axios";

const getUserById = async (id, token) => {
  const requestUrl = `v2/users/${id}`;
  try {
    const res = await axios.get(requestUrl, {
      headers: {
        "Content-Type": "application/vnd.api+json",
        Authorization: "Bearer " + token,
      },
    });
    const data = await res.data;
    if (res.status === 200) {
      return data;
    } else {
      console.log("error");
    }
  } catch (error) {
    if (error.response?.status === 429) {
      return getUserById(id, token);
    }
    console.log("getUserById", error);
  }
};

export default getUserById;
