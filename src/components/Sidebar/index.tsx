import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';

import Link from 'next/link';

import { Container, Image, GoBackButton } from './styles';

const Sidebar: React.FC = () => {
  return (
    <Container
      transition={{
        duration: 0.6,
        type: 'spring',
      }}
      initial={{ x: -25, opacity: 0.8 }}
      animate={{ x: 0, opacity: 1 }}
      layoutId="sidebar"
    >
      <Image
        src="https://cdn.discordapp.com/attachments/785961986009726997/786286867925696532/eaf3094d-c1e5-4e68-917e-17b66a28262e.png"
        alt="Pinto"
        width={74}
        height={74}
      />
      <Link href="/">
        <GoBackButton>
          <FiArrowLeft />
        </GoBackButton>
      </Link>
    </Container>
  );
};

export default Sidebar;
