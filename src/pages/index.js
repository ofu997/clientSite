import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import '../style/main.scss';

export default () => {

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Nathan Ellstrand</title>
        <html lang='en' />
        <meta name="description" content='Nathan Ellstrand' />
      </Helmet>
      <App />
    </>
  );
};
