import NextImage from 'next/image';
import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 1rem;
  flex-wrap: wrap;

  transition: padding 0.5s ease-in-out;

  &:hover {
    padding: 1.5rem 1rem;
  }
`;

export const NameWarnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-left: 3rem;

  h3 {
    font-family: ${(props) => props.theme.fonts.regular};
    font-weight: 500;
    font-size: 1.5rem;

    line-height: 2rem;
  }

  p {
    color: ${(props) => shade(0.25, props.theme.colors.text)};
    font-weight: 300;
    margin-top: 0.3rem;
  }

  .all-time {
    font-weight: 400;
    color: ${(props) => shade(0.1, props.theme.colors.text)};
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 1rem;
    }
  }
`;

export const Image = styled(NextImage)`
  border-radius: 20px;
`;
