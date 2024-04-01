import axios from "axios";

const getUrl = async (requestUrl, token, setter, params = {}) => {
  try {
    const res = await axios.get(requestUrl, {
      headers: {
        "Content-Type": "application/vnd.api+json",
        Authorization: "Bearer " + token,
      },
      ...params,
    });
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    if (res.status !== 200) {
=======
=======
>>>>>>> 1c20ff0 (Correction request getMe)
=======
>>>>>>> 98593d6 (Correction request getMe)
=======
>>>>>>> df16014 (Review views (Login/NavBar profile/Search))
    const data = await res.data;
    if (res.status === 200) {
      console.log(data);//TODO: delete
=======
    const data = await res.data;
    if (res.status === 200) {
<<<<<<< HEAD
      console.log(data);
>>>>>>> 934d90e (Review views (Login/NavBar profile/Search))
=======
      console.log(data);//TODO: delete
>>>>>>> 386e34e (header profile ok search screen)
    } else {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 934d90e (Review views (Login/NavBar profile/Search))
=======
=======
    if (res.status !== 200) {
>>>>>>> 26437fc (Correction request getMe)
<<<<<<< HEAD
>>>>>>> 1c20ff0 (Correction request getMe)
=======
=======
    if (res.status !== 200) {
>>>>>>> 26437fc (Correction request getMe)
>>>>>>> 98593d6 (Correction request getMe)
=======
=======
    if (res.status !== 200) {
=======
    const data = await res.data;
    if (res.status === 200) {
      console.log(data);//TODO: delete
    } else {
>>>>>>> 934d90e (Review views (Login/NavBar profile/Search))
>>>>>>> 2145d28 (Review views (Login/NavBar profile/Search))
>>>>>>> df16014 (Review views (Login/NavBar profile/Search))
      console.log("error");
      throw new Error("User not found");
    }
    // console.log('user data = ', res.data);
    await setter(res.data);
    // return (data);
  } catch (error) {
    console.log("Catched error in getUrl:");
    console.log(error.stack);
  }
};

export default getUrl;
