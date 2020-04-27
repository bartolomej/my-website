import React from "react";
import styled from "styled-components";


function Photo ({ src, caption, orientation }) {

  return (
    <Container>
      <Image
        portrait={orientation === 'portrait'}
        alt={caption}
        src={src}
      />
    </Container>
  )
}

const Container = styled.div`
  width: 300px;
  height: 300px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  margin: 10px;
  @media (max-width: 700px) {
    width: 200px;
    height: 200px;
  }
`;

const Image = styled.img`
  ${props => props.portrait ? 'width: 100%' : 'height: 100%'};
  transition: 0.6s all ease;
  &:hover {
    transform: scale(1.1);
    filter: brightness(1.3);
  }
`;

export default Photo;
