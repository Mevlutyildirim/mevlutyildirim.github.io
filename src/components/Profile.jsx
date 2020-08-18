import React from 'react';
import styled from "styled-components";
import ProfileImage from '../static/profile.jpeg';

const Profile = (props)=>{
  return (
    <ProfileStyled src={ProfileImage} {...props}>
    
    </ProfileStyled>
  )
}

const ProfileStyled = styled.img`
  display:block;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 10px;
`;

export default Profile;