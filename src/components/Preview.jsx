import React, { useEffect } from "react";
import styled from "styled-components";

function Preview ({ isFocused = false, type, background, overflow, url, title, play = false }) {
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
    <PreviewInner bcg={background} overflow={overflow}>
      {type === 'image' ? (
        <Image isfocused={isFocused} alt={title} src={url}/>
      ) : (
        <Video ref={videoRef} isfocused={isFocused} loop>
          <source src={url} type="video/mp4"/>
        </Video>
      )}
    </PreviewInner>
  )
}

const PreviewInner = styled.div`
  height: 300px;
  width: 100%;
  max-width: 500px;
  background: ${props => props.bcg || 'transparent'};
  justify-content: center;
  display: flex;
  border-radius: 10px;
  overflow: ${props => props.overflow || 'hidden'};
  @media (max-width: 700px) {
    height: 100%;
  }
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
