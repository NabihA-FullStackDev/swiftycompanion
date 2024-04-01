import axios from "axios";

const getUserProjects = async (user, token, params={}) => {
    const requestUrl = '/v2/users/' + user + '/projects_users'
  try {
    const res = await axios.get(requestUrl, {
      headers: {
        "Content-Type": "application/vnd.api+json",
        Authorization: 'Bearer ' + token,
      },
      ...params,
    });
    const data = await res.data;
    if (res.status === 200) {
      console.log(data);//TODO: delete
    } else {
      console.log("error");
    }
  } catch (error) {
    console.log(error);
  }
};

export default getUserProjects;
