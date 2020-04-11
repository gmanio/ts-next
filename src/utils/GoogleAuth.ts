import BrowserHelper from "./BrowserHelper";

class GoogleAuth {
  private static CLIENT_ID = "328243791628-e4ufpd21joih7p8bu2gch8u07d277qjq.apps.googleusercontent.com";
  private static instance: GoogleAuth;
  private gAuth: gapi.auth2.GoogleAuth | undefined = undefined;
  private user: gapi.auth2.GoogleUser | undefined = undefined;

  static getInstance(): GoogleAuth {
    GoogleAuth.instance = GoogleAuth.instance || new GoogleAuth();

    return GoogleAuth.instance;
  }

  public initialize = () => {
    gapi.load("auth2", () => {
      this.gAuth = gapi.auth2.init({ client_id: GoogleAuth.CLIENT_ID });
    });
  };

  isSignedIn = (): boolean => !!this.gAuth?.isSignedIn.get();

  getUser = async () => {
    if (!this.isSignedIn()) {
      this.user = await this.gAuth?.signIn();
    }

    return await this.gAuth?.currentUser.get();
  };
}

export default GoogleAuth.getInstance();
