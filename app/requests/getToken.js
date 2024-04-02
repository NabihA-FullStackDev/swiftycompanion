import axios from "axios";
import * as Linking from "expo-linking";

import { CLIENT_ID, APP_SECRET } from "@env";

const getToken = async (code, setToken, setRefresh) => {
  const urlRedirect = Linking.createURL("com.swiftybynaali");
  const requestUrl = "/oauth/token";

  try {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
    console.log(code);//TODO: delete
>>>>>>> 386e34e (header profile ok search screen)
=======
>>>>>>> 4e95064 (Renew request for 429, add anti spam, better loading)
=======
=======
    console.log(code);//TODO: delete
>>>>>>> 31aa7f0 (header profile ok search screen)
>>>>>>> ffaf808 (header profile ok search screen)
=======
=======
    console.log(code);//TODO: delete
>>>>>>> 31aa7f0 (header profile ok search screen)
=======
>>>>>>> 8539d30 (Renew request for 429, add anti spam, better loading)
>>>>>>> 0fb997a (Renew request for 429, add anti spam, better loading)
    const res = await axios.post(requestUrl, {
      grant_type: "authorization_code",
      client_id: CLIENT_ID,
      client_secret: APP_SECRET,
      code: code,
      redirect_uri: urlRedirect,
    });
    if (res.status === 200) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
      console.log(res.data);//TODO: delete
>>>>>>> 386e34e (header profile ok search screen)
=======
      console.log('token and refresh token -->', res.data.access_token, res.data.refresh_token);//TODO: delete
>>>>>>> 4e95064 (Renew request for 429, add anti spam, better loading)
=======
=======
      console.log(res.data);//TODO: delete
>>>>>>> 31aa7f0 (header profile ok search screen)
>>>>>>> ffaf808 (header profile ok search screen)
=======
=======
      console.log(res.data);//TODO: delete
>>>>>>> 31aa7f0 (header profile ok search screen)
=======
      console.log('token and refresh token -->', res.data.access_token, res.data.refresh_token);//TODO: delete
>>>>>>> 8539d30 (Renew request for 429, add anti spam, better loading)
>>>>>>> 0fb997a (Renew request for 429, add anti spam, better loading)
      setToken(res.data.access_token);
      setRefresh(res.data.refresh_token);
    }
  } catch (error) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    console.log('Catched error in getToken:');
    console.log(error.stack);
=======
=======
>>>>>>> 1c20ff0 (Correction request getMe)
=======
>>>>>>> 4e95064 (Renew request for 429, add anti spam, better loading)
=======
>>>>>>> 98593d6 (Correction request getMe)
=======
>>>>>>> 0fb997a (Renew request for 429, add anti spam, better loading)
    if (error.message.split(" ").slice(-1)[0] === "429") {
      getToken(code, setToken, setRefresh);
    }
    console.log(error);
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 4e95064 (Renew request for 429, add anti spam, better loading)
=======
=======
>>>>>>> 98593d6 (Correction request getMe)
=======
    console.log('Catched error in getToken:');
    console.log(error.stack);
>>>>>>> 26437fc (Correction request getMe)
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 1c20ff0 (Correction request getMe)
=======
>>>>>>> 98593d6 (Correction request getMe)
=======
=======
    console.log('Catched error in getToken:');
    console.log(error.stack);
=======
    if (error.message.split(" ").slice(-1)[0] === "429") {
      getToken(code, setToken, setRefresh);
    }
    console.log(error);
>>>>>>> 4e95064 (Renew request for 429, add anti spam, better loading)
>>>>>>> 8539d30 (Renew request for 429, add anti spam, better loading)
>>>>>>> 0fb997a (Renew request for 429, add anti spam, better loading)
  }
};

export default getToken;
