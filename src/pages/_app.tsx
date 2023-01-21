import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { MantineProvider } from '@mantine/core';
import { api } from "../utils/api";
import theme from '../styles/theme'

import "../styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <MantineProvider

        withGlobalStyles
        withNormalizeCSS
        theme={{
          colors:{
            ...theme
          },
          colorScheme: 'dark',
          primaryColor:'primary',
        }}

      >
      <Component {...pageProps} />
      </MantineProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
