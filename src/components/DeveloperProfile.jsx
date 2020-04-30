import React from "react";
import styled from "styled-components";
import { animated, useSpring } from 'react-spring'
// language icons
import js from '../assets/tools/javascript.png';
import java from '../assets/tools/java.png';
import go from '../assets/tools/go.png';
import typescript from '../assets/tools/typescript.png';
import css from '../assets/tools/css.png';
import html from '../assets/tools/html.png';
import useFocus from "../useFocus";
import { colorWithOpacity } from "../style";
import Photo, { PHOTO_ACTIONS } from "./Photo";


const LANGUAGES = {
  "JavaScript": {
    icon: js,
    color: 'rgba(240,219,78,0.5)',
    url: 'https://en.wikipedia.org/wiki/JavaScript'
  },
  "Java": {
    icon: java,
    color: 'rgba(208,42,44,0.5)',
    url: 'https://en.wikipedia.org/wiki/Java_(programming_language)'
  },
  "Go": {
    icon: go,
    color: 'rgba(105,215,229,0.5)',
    url: 'https://en.wikipedia.org/wiki/Go_(programming_language)'
  },
  "TypeScript": {
    icon: typescript,
    color: 'rgba(0,121,204,0.5)',
    url: 'https://en.wikipedia.org/wiki/TypeScript'
  },
  "HTML": {
    icon: html,
    color: 'rgba(229,77,38,0.5)',
    url: 'https://en.wikipedia.org/wiki/HTML'
  },
  "CSS": {
    icon: css,
    color: 'rgba(20,114,182,0.5)',
    url: 'https://en.wikipedia.org/wiki/Cascading_Style_Sheets'
  }
}

function DeveloperProfile ({ avatar, fullName, bio, commits, followers, followersUrl, commitsUrl, languages, profileUrl }) {
  const containerRef = React.useRef();
  const isFocused = useFocus(containerRef, true);

  return (
    <Container>
      <Photo
        size={200}
        styles={'border-radius: 50%;'}
        action={PHOTO_ACTIONS.OPEN_URL}
        url={profileUrl}
        src={avatar}
        caption={'Visit my Github profile'}
      />
      {bio.map((paragraph, i) => <Description key={i}>{paragraph}</Description>)}
      <StatsWrapper>
        <StatsElement target="_blank" href={commitsUrl}>
          <span>{commits}</span>
          <span>Git commits in one year</span>
        </StatsElement>
        <StatsElement target="_blank" href={followersUrl}>
          <span>{followers}</span>
          <span>Github followers</span>
        </StatsElement>
      </StatsWrapper>
      <LanguageStatsWrapper ref={containerRef}>
        {languages.sort(compareLanguage).filter(l => LANGUAGES[l.name] !== undefined).map(l => (
          <LanguageVis
            key={l.name}
            show={isFocused}
            name={l.name}
            percentage={l.percentage}
          />
        ))}
      </LanguageStatsWrapper>
    </Container>
  )
}

function compareLanguage (a, b) {
  return b.percentage - a.percentage
}

function LanguageVis ({ show, percentage, name }) {
  const props = useSpring({ width: show ? `${percentage}%` : '0%' })

  return (
    <LanguageElement>
      <LanguageTextSide txtColor={LANGUAGES[name].color}>
        <a rel="noopener noreferrer" target="_blank" href={LANGUAGES[name].url}>{name}</a>
      </LanguageTextSide>
      <LanguageGraphSide>
        <LanguagePercentage
          style={props}
          bcg={LANGUAGES[name].color}
          percentage={percentage}
        />
        <img alt={name} src={LANGUAGES[name].icon}/>
      </LanguageGraphSide>
    </LanguageElement>
  )
}

const Container = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 700px) {
    width: 100%;
  }
`;

const Description = styled.p`
  color: ${props => props.theme.lightText};
  font-size: 1.4em;
  margin: 10px 0;
  text-align: center;
  @media (max-width: 700px) {
    line-height: 1.3;
  }
`;

const StatsWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-evenly;
  width: 100%;
  margin: 20px 0;
`;

const StatsElement = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover {
    div { color: ${props => props.theme.vibrant} }  
  }
  span:nth-child(1) {
    font-weight: bold;
    font-size: 2em;
    line-height: 1;
    color: ${props => props.theme.light};
  }
  span:nth-child(2) {
    color: ${props => props.theme.lightText};
  }
`;

const LanguageStatsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const LanguageElement = styled.div`
  display: flex;
  flex-direction: row;
  margin: 15px 0;
  img {
    width: 30px;
    height: 30px;
  }
  @media (max-width: 700px) {
    margin: 10px 0;
  }
`;

const LanguageTextSide = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
  a {
    font-weight: bold;
    font-size: 1.3em;
    color: ${props => colorWithOpacity(props.txtColor, 1) || props.theme.light};
  }
  a:hover {
    color: ${props => props.theme.light};
  }
  @media (max-width: 700px) {
    flex: 2;
  }
`;

const LanguageGraphSide = styled.div`
  flex: 3;
  img {
    margin-left: 10px;
  }
`;

const LanguagePercentage = styled(animated.div)`
  display: inline-block;
  background: ${props => props.bcg};
  width: ${props => props.percentage}%;
  height: 80%;
`;

export default DeveloperProfile;
