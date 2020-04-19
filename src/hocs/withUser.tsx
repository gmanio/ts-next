import * as React from 'react';
import { FC, useEffect, useState } from 'react';
import GoogleAuth from '../utils/GoogleAuth';
import { useRouter } from 'next/router';
import BrowserHelper from '../utils/BrowserHelper';

type GoogleAuth = gapi.auth2.GoogleAuth;
type GoogleUser = gapi.auth2.GoogleUser;
const CLIENT_ID = '328243791628-e4ufpd21joih7p8bu2gch8u07d277qjq.apps.googleusercontent.com';

export interface UserProp {
  user: GoogleUser | null;
  signOut: () => void;
  signIn: () => void;
  isLogin: () => boolean;
};

var platform_callback = () => {
  gapi.load('auth2', async () => {
    gapi.auth2.init({ client_id: CLIENT_ID });
  });
};

const withUser = (WrappedComponent: FC) => (props: any) => {
  const router = useRouter();
  const [googleAuth, setGoogleAuth] = useState<GoogleAuth | null>(BrowserHelper.isBrowser && gapi && gapi.auth2 ? gapi.auth2.getAuthInstance() : null);
  const [user, setUser] = useState<GoogleUser | null>(BrowserHelper.isBrowser && gapi && gapi.auth2 && gapi.auth2.getAuthInstance() ? gapi.auth2.getAuthInstance().currentUser.get() : null);

  const initialize = async () => {
    if (BrowserHelper.isBrowser && gapi && gapi.auth2) {
      setGoogleAuth(gapi.auth2.getAuthInstance());
    } else {
      gapi.load('auth2', async () => {
        gapi.auth2.init({ client_id: CLIENT_ID }).then(async () => {
          setGoogleAuth(gapi.auth2.getAuthInstance());
          setUser(await gapi.auth2.getAuthInstance().signIn());
        });
      });
    }
  };

  const signIn = async () => setUser(await googleAuth!.signIn());
  const signOut = async () => {
    await googleAuth!.signOut();
    setUser(null);
  };
  const isLogin = (): boolean => !!googleAuth!.isSignedIn.get();

  useEffect(() => {
    BrowserHelper.isBrowser && !googleAuth && gapi && initialize();
  }, []);

  // useEffect(() => {
  //   console.log(user);
  //
  //   if (!user) {
  //     const pathName = router.pathname;
  //     router.replace(`/login?returnUrl=${pathName}`);
  //   }
  // }, [user]);

  const userProp: UserProp = { user, isLogin, signIn, signOut };
  return (
    <WrappedComponent {...props} {...userProp} />
  )
};

export default withUser;
