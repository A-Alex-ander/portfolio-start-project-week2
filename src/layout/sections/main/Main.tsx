import React from 'react';
import photo from '../../../assets/images/photo.webp'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/container/Container";
import {theme} from "../../../styles/Theme";

export const Main = () => {
    return (

        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"}>
                    <div>
                        <SmallText>Hello, I Am</SmallText>
                        <Name> <span>Alexander Dubrov</span></Name>
                        <MainTitle>FRONT-END DEVELOPER. </MainTitle>
                    </div>
                    <PhotoWrapper>
                        <Photo src={photo}/>
                    </PhotoWrapper>

                </FlexWrapper>
            </Container>

        </StyledMain>

    );
};

export default Main;

const StyledMain = styled.section`
  min-height: 100vh;
  background-color: #e8e8e8;
  display:flex;

`

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`

const MainTitle = styled.h1`
  font-weight: 400;
  font-size: 27px;
  

`

const Name = styled.h2`
  font-family: Josefin Sans, sans-serif;
  font-size: 50px;
  font-weight: 700;
  letter-spacing: 2.5px;
  margin: 10px 0;

  span {
    position: relative;
    z-index: 0;
    &::before {
      content: "";
      display: inline-block;
      width: 100%;
      height: 20px;
      background-color: ${theme.colors.accent};
      position: absolute;
      bottom: 0;
      z-index: -1;
    }
  }

`

const SmallText = styled.div`


  font-style: normal;
  font-weight: 400;

`

const PhotoWrapper = styled.div`
position: relative;
  z-index: 0;
  &::before {
    content: "";
    width: 360px;
    height: 470px;
    border: 5px solid ${theme.colors.accent};

    position: absolute;
    top:-24px;
    
    left: 24px;
    z-index: -1;
    
  }
`