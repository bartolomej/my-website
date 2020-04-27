import React, { useState } from "react";
import styled from "styled-components";
import { animated, useSpring, useTransition } from "react-spring";
import UseAnimations from "react-useanimations";


function Photo ({ src, caption, orientation }) {
  const [isOpen, setOpen] = useState(false);
  const props = useSpring({ number: 1, from: { number: 0 } })

  const transitions = useTransition(isOpen, null, {
    from: { opacity: 0, transform: 'scale(0.2)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0.2)' },
  })

  const bcgTransitions = useTransition(isOpen, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  function handleClick () {
    setOpen(!isOpen);
  }

  return (
    <>
      {bcgTransitions.map(({ item, key, props }) =>
        item && (
          <>
            <CloseButton
              key={key}
              style={props}
              onClick={handleClick}
            >
              <UseAnimations
                animationKey="plusToX"
                size={56}
                style={{ transform: 'rotate(45deg)' }}
              />
            </CloseButton>
            <OpenBackground key={key} style={props}/>
          </>
        )
      )}
      {transitions.map(({ item, key, props }) =>
        item && (
          <OpenContainer key={key} style={props}>
            <OpenedImage
              alt={caption}
              src={src}
            />
          </OpenContainer>
        )
      )}
      <Container onClick={handleClick}>
        <Image
          portrait={orientation === 'portrait'}
          alt={caption}
          src={src}
        />
      </Container>
    </>
  )
}

const Container = styled.div`
  cursor: pointer;
  width: 300px;
  height: 300px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  margin: 10px;
  @media (max-width: 700px) {
    width: 85%;
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

const OpenContainer = styled(animated.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 3;
  display: flex;
  justify-content: center;
`;

const OpenBackground = styled(animated.div)`
  background: ${props => props.theme.dark};
  position: fixed;
  z-index: 2;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const CloseButton = styled(animated.button)`
  position: fixed;
  top: 10px;
  left: 10px;
  z-index: 4;
  color: ${props => props.theme.lightText};
`;

const OpenedImage = styled.img`
  max-height: 100%;
  max-width: 100%;
  width: auto;
  height: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;

export default Photo;
