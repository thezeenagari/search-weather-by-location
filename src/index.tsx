import React from 'react';
import ReactDOM from 'react-dom';

import ApolloClient, { InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import './assets/global.css';
import App from './app';
import reportWebVitals from './reportWebVitals';

const client: any = new ApolloClient({
  uri: "https://graphql-weather-api.herokuapp.com/",
  cache: new InMemoryCache(),
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
    "Access-Control-Allow-Headers":
      "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
  },
  credentials: "omit",
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
    <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
