import React, { useEffect, useState } from 'react'
import { ThemeProvider } from '@emotion/react';
import { customTheme } from '../styles/theme';

import {
  AmplifyProvider,
  Authenticator, useAuthenticator,
  Button,
  Flex,
  Image,
  Text,
  View,
  withAuthenticator, Heading
} from '@aws-amplify/ui-react';
import { useNavigate, useLocation } from 'react-router';

import "@aws-amplify/ui-react/styles.css";

export default function Login() {
  const { route } = useAuthenticator((context) => [context.route]);
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || '/';
  useEffect(() => {
    console.log('effect, route', route);
    if (route === 'authenticated') {
      navigate(from, { replace: true });
    }
  }, [route, navigate, from]);

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
