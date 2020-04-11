import { FC, useEffect, useState } from "react";
import BrowserHelper from "../utils/BrowserHelper";
import GoogleAuth from "../utils/GoogleAuth";

const withUser = (WrappedComponent: FC) => (props: any) => {
  const [user, setUser] = useState<gapi.auth2.GoogleUser | undefined>();
  BrowserHelper.isBrowser && GoogleAuth.initialize();
  useEffect(() => {
    // Using an IIFE
    (async () => {
      const user = await GoogleAuth.getUser();
      setUser(user);
    })();
  }, []);

  return <WrappedComponent {...props} {...{ user: user }} />
};

export default withUser;