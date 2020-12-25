import { motion } from 'framer-motion';
import NextImage from 'next/image';
import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled(motion.div)`
  display: none;
  @media (min-width: 1050px) {
    display: flex;

    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);

    margin: 0;
    padding: 1rem 0;

    width: 6rem;
    height: 100%;
    position: fixed;

    background-color: ${(props) => props.theme.backgrounds.ligth};
    overflow: auto;
  }
`;

export const Image = styled(NextImage)`
  border-radius: 16px;
`;

export const GoBackButton = styled.a`
  height: 3.1rem;
  background-color: ${(props) => shade(0.2, props.theme.colors.primary)};
  padding: 1.2rem;

  border-radius: 8px;
  transition: all 0.2s ease-in-out;

  display: flex;
  align-items: center;
  justify-content: center;

  @keyframes leftArrowMove {
    25%,
    75% {
      transform: translateX(-2px);
    }
    50%,
    100% {
      transform: translateX(-0px);
    }
  }

  &:hover {
    background-color: ${(props) => shade(0.1, props.theme.colors.primary)};
    svg {
      animation: leftArrowMove 0.5s linear;
      animation-delay: 0.3s;
    }
  }
`;
