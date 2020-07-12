import React from 'react';

import { 
   Container, 
   Banner, 
   Avatar, 
   ProfileData, 
   LocationIcon, 
   CakeIcon, 
   Followage,
   EditButton
    } from './styles';

const ProfilePage: React.FC = () => {
  return (
     <Container>
        <Banner>
           <Avatar />
           </Banner>
           
           <ProfileData>
              <EditButton outlined>Editar perfil</EditButton>
              <h1>Brenda Miranda</h1>
              <h2>@bmndxx</h2>
              <p>Front-end Developer, 22 anos, carioca :D</p>

              <ul>
                 <li>
                    <LocationIcon />
                    Rio de Janeiro, Brasil
                 </li>
                 <li>
                    <CakeIcon />
                    Nascido em 18 de Maio de 1998
                 </li>
              </ul>

              <Followage>
                 <span>
                    <strong> 124 </strong> Seguindo
                  </span>
                  <span>
                    <strong> 328 </strong> seguidores
                 </span>
              </Followage>
           </ProfileData>
        
     </Container>
  );
}

export default ProfilePage;