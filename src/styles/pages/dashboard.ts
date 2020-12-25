import { motion } from 'framer-motion';
import { lighten } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;

  align-items: center;
  flex-direction: column;
  padding: 2rem;

  h1 {
    font-size: 4rem;
    color: ${(props) => props.theme.colors.text};
    text-shadow: ${(props) => `0 0 1rem ${props.theme.colors.primary}`};
    filter: blur(0.004em);
  }
  overflow-y: scroll;
`;

export const Content = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  padding: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);

  flex: 1;
  width: 50rem;
  max-width: 95%;

  background-color: ${(props) => props.theme.backgrounds.ligth};
  border-radius: 8px;

  hr {
    border-radius: 8px;
    height: 1px;
    border: none;

    color: ${(props) => lighten(0.1, props.theme.backgrounds.ligth)};
    background-color: ${(props) => lighten(0.1, props.theme.backgrounds.ligth)};
  }

  hr:last-child {
    display: none;
  }
`;
