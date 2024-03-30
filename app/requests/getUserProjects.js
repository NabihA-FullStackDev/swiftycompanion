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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      return data;
=======
      console.log(data);
>>>>>>> 934d90e (Review views (Login/NavBar profile/Search))
=======
      console.log(data);//TODO: delete
>>>>>>> 386e34e (header profile ok search screen)
=======
      return data;
=======
      console.log(data);
>>>>>>> 2145d28 (Review views (Login/NavBar profile/Search))
>>>>>>> df16014 (Review views (Login/NavBar profile/Search))
    } else {
      console.log("error");
    }
  } catch (error) {
    console.log(error);
  }
};

export default getUserProjects;
