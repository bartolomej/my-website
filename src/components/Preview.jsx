import React, { useEffect } from "react";
import styled from "styled-components";
import UseAnimations from "react-useanimations";

function Preview ({ isFocused = false, type, background, overflow, url, title, play = false, height = 300 }) {
  const videoRef = React.useRef();

  useEffect(() => {
    if (play === true) {
      playVideo();
    } else if (play === false) {
      pauseVideo();
    }
  }, [play])

  function playVideo () {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }

  function pauseVideo () {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  }

  return (
    <Container h={height} bcg={background} overflow={overflow}>
      <Loading animationKey="loading" />
      {type === 'image' ? (
        <Image isfocused={isFocused} alt={title} src={url}/>
      ) : (
        <Video ref={videoRef} isfocused={isFocused} loop>
          <source src={url} type="video/mp4"/>
        </Video>
      )}
    </Container>
  )
}

const Container = styled.div`
  height: ${props => `${props.h}px`};
  position: relative;
  background: ${props => props.bcg || 'transparent'};
  justify-content: center;
  display: flex;
  border-radius: 10px;
  overflow: ${props => props.overflow || 'hidden'};
  @media (max-width: 700px) {
    height: 100%;
  }
`;

const Loading = styled(UseAnimations)`
  position: absolute;
  left: 0; 
  right: 0; 
  top: 0;
  bottom: 0;
  width: 60px !important;
  height: 60px;
  margin: auto;
  color: ${props => props.theme.lightText};
`;

const Image = styled.img`
  height: 100%;
  width: auto;
  transition: 0.6s all ease;
  ${props => props.isfocused ? 'transform: scale(1.1);' : ''};
  @media(max-width: 700px) {
    width: 100%;
  }
`;

const Video = styled.video`
  height: 100%;
  width: auto;
  transition: 0.6s all ease;
  ${props => props.isfocused ? 'transform: scale(1.1);' : ''};
  @media(max-width: 700px) {
    width: 100%;
  }
`;

export default Preview;
