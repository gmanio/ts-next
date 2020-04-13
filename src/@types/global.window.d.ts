declare global {
  interface Window {
    gapi: any;
    platform_callback: () => void;
  }
}

export {};