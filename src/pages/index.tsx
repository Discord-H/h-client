import React from 'react';

import Head from 'next/head';
import Link from 'next/link';

import { Container, MainTitle } from '../styles/pages';

const Landing: React.FC = () => {
  return (
    <>
      <Head>
        <title>H</title>
      </Head>
      <Container>
        <Link href="/dashboard">
          <MainTitle>
            <h1>H</h1>
          </MainTitle>
        </Link>
      </Container>
    </>
  );
};

export default Landing;
