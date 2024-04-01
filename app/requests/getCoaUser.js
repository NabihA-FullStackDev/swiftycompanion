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
        await setCoa(selectBackground(data));
    } else {
      console.log("error");
    }
  } catch (error) {
    console.log(error);
  }
};

export default getCoaUser;
