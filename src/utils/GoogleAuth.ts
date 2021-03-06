import BrowserHelper from "./BrowserHelper";

class GoogleAuth {
  public static instance: GoogleAuth;
  public authInstance: gapi.auth2.GoogleAuth | null = null;
  public currentUser: gapi.auth2.GoogleUser | null = null;
  private static CLIENT_ID = "328243791628-e4ufpd21joih7p8bu2gch8u07d277qjq.apps.googleusercontent.com";
  public static getInstance = (): any => GoogleAuth.instance || new GoogleAuth();

  initialize = async (callback?: () => void) => {
    setTimeout(() => {
      if (BrowserHelper.isBrowser && gapi) {
        gapi.load("auth2", () => {
          gapi.auth2.init({ client_id: GoogleAuth.CLIENT_ID }).then(async () => {
            this.authInstance = gapi.auth2.getAuthInstance();
            this.currentUser = await this.authInstance.signIn();
            callback && callback();
          });
        });
      }
    }, 100);
  };

  signOut = async () => {
    this.authInstance!.signOut();
    this.currentUser = null;
  };
}

export default GoogleAuth.getInstance();