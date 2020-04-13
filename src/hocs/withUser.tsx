import { FC, useEffect, useState } from "react";
import BrowserHelper from "../utils/BrowserHelper";
import GoogleAuth from "../utils/GoogleAuth";

const CLIENT_ID = "328243791628-e4ufpd21joih7p8bu2gch8u07d277qjq.apps.googleusercontent.com";

const withUser = (WrappedComponent: FC) => (props: any) => {
  const [user, setUser] = useState<gapi.auth2.GoogleUser | null>(null);
  const callback = () => {
    const user = GoogleAuth.currentUser;
    setUser(user);
  };
  useEffect(() => {
    // // Using an IIFE
    (async () => {
      await GoogleAuth.initialize(callback);
    })();
  }, []);

  // useEffect(() => {
  //   if (GoogleAuth.authInstance) {
  //     console.log(GoogleAuth.authInstance);

  //     debugger;
  //     setUser(GoogleAuth.currentUser);
  //   }
  // }, [GoogleAuth.authInstance]);

  // const signOut = async () => {
  //   await GoogleAuth.signOut();
  // }

  // const getUser = async () => await GoogleAuth.getUser();

  return <WrappedComponent {...props} {...{ user: GoogleAuth.currentUser }} />
};

export default withUser;