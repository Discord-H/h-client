import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 1rem;

  .skeleton-image {
    width: 5rem;
    height: 5rem;
  }
`;

export const NameWarnContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;

  padding: 1rem;

  .skeleton-title {
    width: 6rem;
    height: 0.8rem;
  }

  .skeleton-text {
    width: 8rem;
    margin-top: 2rem;
    height: 0.6rem;
  }
`;
