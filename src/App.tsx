import React, { useEffect, useState } from 'react'
import { Amplify, API, graphqlOperation } from 'aws-amplify'

import logo from './logo.svg';
import './App.css';

//import awsExports from './aws-exports';
//Amplify.configure(awsExports);

import {   AmplifyProvider,
  Authenticator,
  Button,
  Flex,
  Image,
  Text,
  View,
withAuthenticator, Heading } from '@aws-amplify/ui-react';

//import aws_exports from "./aws-exports";
import "@aws-amplify/ui-react/styles.css";
//Amplify.configure(aws_exports);

const App = () => {
  return (
    <AmplifyProvider> 
      <Authenticator>
        {({ signOut, user }) => (
          <Flex
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
            alignContent="flex-start"
            wrap="nowrap"
            gap="1rem"
            textAlign="center"
          >
            <View width="100%">
              <Image src={logo} alt="logo" width={240} height={240} />
            </View>

            {user && (
              <View width="100%">
                <Text>Hello {user.username}</Text>
                <Button onClick={signOut}>
                  <Text>Sign Out</Text>
                </Button>
              </View>
            )}

            <View width="100%">
              <Text>
                Edit <code>src/App.tsx</code> and save to reload.
              </Text>
            </View>
          </Flex>
        )}
      </Authenticator>
    </AmplifyProvider>
  );
};

export default App;
