import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;

  align-items: center;
  flex-direction: column;
  justify-content: center;

  padding: 2rem;
`;

export const MainTitle = styled.a`
  text-decoration: none;

  @keyframes shake {
    0%,
    10% {
      transform: skewX(-2deg);
    }
    5%,
    15% {
      transform: skewX(2deg);
    }
    20%,
    100% {
      transform: skewX(0deg);
    }
  }

  @keyframes hardShake {
    0%,
    10% {
      transform: skewX(-8deg);
    }
    5%,
    15% {
      transform: skewX(8deg);
    }
    20%,
    100% {
      transform: skewX(0deg);
    }
  }

  h1 {
    font-size: 7rem;
    animation: shake 0.8s infinite linear;

    color: ${(props) => props.theme.colors.text};
    text-shadow: ${(props) => `0 0 1rem ${props.theme.colors.primary}`};
    filter: blur(0.007em);
  }

  &:hover {
    h1 {
      animation: hardShake 0.8s linear;
    }
  }
`;
