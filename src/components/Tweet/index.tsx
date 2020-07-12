import React from 'react';

import { 
   Container, 
   Retweeted, 
   RocketseatIcon, 
   Body,
   Avatar,
   Content,
   Header,
   Dot,
   Description,
   ImageContent,
   Icons,
   Status,
   CommentIcon,
   RetweetIcon,
   LikeIcon
 } from './styles';

const Tweet: React.FC = () => {
  return (
     <Container>
        <Retweeted>
            <RocketseatIcon />
            Você retweetou
        </Retweeted>

        <Body>
           <Avatar />

           <Content>
              <Header>
                 <strong>Rocketseat</strong>
                 <span>@rocketseat</span>
                 <Dot />
                 <time>27 de Jun</time>
              </Header>

              <Description>Foguete não tem ré</Description>
               
               <ImageContent />

               <Icons>

                  <Status>
                     <CommentIcon />
                     18
                  </Status>

                  <Status>
                     <RetweetIcon />
                     89
                  </Status>

                  <Status>
                     <LikeIcon />
                     675
                  </Status>

               </Icons>
           </Content>
        </Body>
     </Container>
  )
}

export default Tweet;