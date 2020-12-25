import React from 'react';

import { Container, NameWarnContainer, Image } from './styles';

export interface IUserData {
  _id: string;
  name: string;
  warns: number;
  profile_pic: string;
  all_time_warns: number;
}

export interface IUserInfoProps {
  user: IUserData;
}

const UserInfo: React.FC<IUserInfoProps> = ({
  user: { name, profile_pic, warns, all_time_warns },
}) => {
  return (
    <Container>
      <Image src={profile_pic} alt={name} width={75} height={75} />
      <NameWarnContainer>
        <h3>{name}</h3>
        <p className="all-time">All-time Warns: {all_time_warns} </p>
        <p>Current Warns: {warns} </p>
      </NameWarnContainer>
    </Container>
  );
};

export default UserInfo;
