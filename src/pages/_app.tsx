import * as React from 'react';
import App, { AppContext } from 'next/app';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Component {...pageProps}></Component>
    );
  }
}

export default MyApp;
