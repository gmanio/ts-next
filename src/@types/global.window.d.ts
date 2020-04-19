export declare global {
  interface Window {
    gapi: any;
    platform_callback: () => void;
    GoogleUser: gapi.auth2.GoogleUser;
  }
}

export {};
