import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Index from './route/Index';

const App = () => {

  const client = new ApolloClient({
    uri: "http://localhost:5001/ap1/v1/category",
    cache: new InMemoryCache(),
  })
  
  return (
   <ApolloProvider client={client}>
    <Index />
   </ApolloProvider>
  );
}

export default App; 
