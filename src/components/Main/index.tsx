import React from 'react';

import { Container, Header, BackIcon, ProfileIfo } from './styles';

const Main: React.FC = () => {
  return (
     <Container>
        <Header>
           <button>
              <BackIcon />
           </button>

           <ProfileInfo>
              <strong>Brenda Miranda</strong>
              <span>324 Tweets</span>
           </ProfileInfo>
        </Header>

        {/* <ProfilePage /> */}

        {/* <BottomMenu>
            <HomeIcon />
            <SearchIcon />
            <BellIcon />
            <EmailIcon />
        </BottomMenu> */}
     </Container>
  )
}

export default Main;