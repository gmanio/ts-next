import App, { AppContext } from 'next/app';
import GoogleAuth from '../utils/GoogleAuth';
import BrowserHelper from '../utils/BrowserHelper';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    BrowserHelper.isBrowser && GoogleAuth.initialize();

    return (
      <Component {...pageProps}></Component>
    );
  }
}

export default MyApp;