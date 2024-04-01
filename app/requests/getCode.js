import * as WebBrowser from "expo-web-browser";
import * as Linking from "expo-linking";
import { CLIENT_ID } from "@env";

WebBrowser.maybeCompleteAuthSession();

export const getCode = async () => {
  const urlRedirect = Linking.createURL("com.swiftybynaali");
  const requestUrl = `https://api.intra.42.fr/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${urlRedirect}&response_type=code&scope=public`;

  try {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
    console.log(urlRedirect);
>>>>>>> 934d90e (Review views (Login/NavBar profile/Search))
=======
    console.log(urlRedirect);//TODO: delete
>>>>>>> 386e34e (header profile ok search screen)
=======
    console.log('Url for the redirection -->', urlRedirect);//TODO: delete
>>>>>>> 4e95064 (Renew request for 429, add anti spam, better loading)
=======
=======
    console.log(urlRedirect);
>>>>>>> 2145d28 (Review views (Login/NavBar profile/Search))
>>>>>>> df16014 (Review views (Login/NavBar profile/Search))
=======
=======
    console.log(urlRedirect);
>>>>>>> 2145d28 (Review views (Login/NavBar profile/Search))
=======
    console.log(urlRedirect);//TODO: delete
>>>>>>> 31aa7f0 (header profile ok search screen)
>>>>>>> ffaf808 (header profile ok search screen)
    const res = await WebBrowser.openAuthSessionAsync(requestUrl, urlRedirect, {
      ASWebAuthenticationSession: false,
    });
    if (res.type !== "success") {
      throw new Error("Login failed");
    }
    const code = res.url.toString().split("code=")[1];
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
    console.log(code);
>>>>>>> 934d90e (Review views (Login/NavBar profile/Search))
=======
    console.log(code);//TODO: delete
>>>>>>> 386e34e (header profile ok search screen)
=======
    console.log('Code -->', code);//TODO: delete
>>>>>>> 4e95064 (Renew request for 429, add anti spam, better loading)
=======
=======
    console.log(code);
>>>>>>> 2145d28 (Review views (Login/NavBar profile/Search))
>>>>>>> df16014 (Review views (Login/NavBar profile/Search))
=======
=======
    console.log(code);
>>>>>>> 2145d28 (Review views (Login/NavBar profile/Search))
=======
    console.log(code);//TODO: delete
>>>>>>> 31aa7f0 (header profile ok search screen)
>>>>>>> ffaf808 (header profile ok search screen)
    return code;
  } catch (error) {
    console.log(error);
    return "";
  }
};
