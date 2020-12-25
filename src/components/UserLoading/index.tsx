import React from 'react';

import Skeleton from '../Skeleton';

import { Container, NameWarnContainer } from './styles';

const UserLoading: React.FC = () => {
  return (
    <Container>
      <Skeleton className="skeleton-image" />
      <NameWarnContainer>
        <Skeleton className="skeleton-title" />
        <Skeleton className="skeleton-text" />
        <Skeleton className="skeleton-text" />
      </NameWarnContainer>
    </Container>
  );
};

export default UserLoading;
