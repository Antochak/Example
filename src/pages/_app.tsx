import type {AppProps} from 'next/app';
import Head from 'next/head';
import React, {Fragment} from 'react';
import {META} from '~/meta';
import GlobalStyles from '~/styles/GlobalStyles';

interface MyAppProps extends AppProps {
  Component: AppProps['Component'] & {
    Layout?: React.FC<React.PropsWithChildren<unknown>>;
  };
}

export default function MyApp(props: MyAppProps) {
  const {Component, pageProps} = props;
  const Layout = Component.Layout || Fragment;

  return (
    <>
      <Head>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
        <title>{META.title}</title>
      </Head>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
