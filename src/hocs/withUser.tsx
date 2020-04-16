import { FC, useEffect, useState } from "react";
import BrowserHelper from "../utils/BrowserHelper";
import GoogleAuth from "../utils/GoogleAuth";

const CLIENT_ID = "328243791628-e4ufpd21joih7p8bu2gch8u07d277qjq.apps.googleusercontent.com";

export interface UserProp {
  user: gapi.auth2.GoogleUser | null;
  signOut: () => void;
  signIn: () => void;
  isLogin: () => boolean;
}

const withUser = (WrappedComponent: FC) => (props: any) => {
  const [user, setUser] = useState<gapi.auth2.GoogleUser | null>(GoogleAuth.currentUser ? GoogleAuth.currentUser : null);

  const callback = () => {
    const user = GoogleAuth.currentUser;
    setUser(user);
  };

  useEffect(() => {
    // // Using an IIFE
    (async () => {
      if (!GoogleAuth.authInstance) {
        await GoogleAuth.initialize(callback);
      }
    })();
  }, []);

  const signIn = async () => setUser(await GoogleAuth.authInstance!.signIn());

  const signOut = async () => {
    await GoogleAuth.signOut();
    setUser(null);
  };
  const isLogin = (): boolean => !!GoogleAuth.authInstance?.isSignedIn.get();
  const userProp: UserProp = { user: user, signOut: signOut, signIn: signIn, isLogin: isLogin };

  return <WrappedComponent {...props} {...userProp} />
};

export default withUser;