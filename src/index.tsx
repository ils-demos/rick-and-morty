// import React from 'react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './routes/App';
import { BrowserRouter as Router} from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, NormalizedCacheObject } from "@apollo/client";

const client = new ApolloClient<NormalizedCacheObject>({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache()
})

ReactDOM.render(
  <Router>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
