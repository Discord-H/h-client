import React, { useMemo } from 'react';

import Head from 'next/head';

import Sidebar from '../components/Sidebar';
import UserInfo, { IUserData } from '../components/UserInfo';
import UserLoading from '../components/UserLoading';
import { useGet } from '../hooks/useGet';

import { Container, Content } from '../styles/pages/dashboard';

const Dashboard: React.FC = () => {
  const { data: dataReq } = useGet<IUserData[]>('/users');

  const data = useMemo(
    () =>
      dataReq
        ? dataReq.sort((a, b) => b.all_time_warns - a.all_time_warns)
        : null,
    [dataReq]
  );

  return (
    <>
      <Head>
        <title>H | Dashboard</title>
      </Head>
      <Sidebar />
      <Container>
        <h1>Dashboard</h1>
        <Content
          transition={{
            duration: 1,
          }}
          initial={{ y: 50, opacity: 0.3 }}
          animate={{ y: 0, opacity: 1 }}
        >
          {data
            ? data.map((user, index) => (
                <React.Fragment key={index}>
                  <UserInfo user={user} />
                  <hr />
                </React.Fragment>
              ))
            : Array.from(Array(10)).map((_, index) => (
                <React.Fragment key={index}>
                  <UserLoading />
                  <hr />
                </React.Fragment>
              ))}
        </Content>
      </Container>
    </>
  );
};

export default Dashboard;
