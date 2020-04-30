import React from "react";
import styled from "styled-components";
import UseAnimations from "react-useanimations";
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


const LANGUAGES = {
  "JavaScript": {
    icon: js,
    color: 'rgba(240,219,78,0.5)'
  },
  "Java": {
    icon: java,
    color: 'rgba(208,42,44,0.5)'
  },
  "Go": {
    icon: go,
    color: 'rgba(105,215,229,0.5)'
  },
  "TypeScript": {
    icon: typescript,
    color: 'rgba(0,121,204,0.5)'
  },
  "HTML": {
    icon: html,
    color: 'rgba(229,77,38,0.5)'
  },
  "CSS": {
    icon: css,
    color: 'rgba(20,114,182,0.5)'
  }
}

function DeveloperProfile ({ avatar, fullName, description, commits, followers, followersUrl, commitsUrl, languages, profileUrl }) {
  const containerRef = React.useRef();
  const isFocused = useFocus(containerRef, true);

  return (
    <Container>
      <Avatar alt="Github avatar" src={avatar}/>
      <Name>{fullName}</Name>
      <Description>{description}</Description>
      <StatsWrapper>
        <StatsElement target="_blank" href={commitsUrl}>
          <span>{commits}</span>
          <span>This years commits</span>
        </StatsElement>
        <StatsElement target="_blank" href={followersUrl}>
          <span>{followers}</span>
          <span>My followers</span>
        </StatsElement>
      </StatsWrapper>
      <Subtitle>Programming Language Experience:</Subtitle>
      <LanguageStatsWrapper ref={containerRef}>
        {languages.map(l => (
          <LanguageVis
            key={l.name}
            show={isFocused}
            name={l.name}
            percentage={l.percentage}
          />
        ))}
      </LanguageStatsWrapper>
      <VisitLink href={profileUrl}>
        <UseAnimations animationKey="github" size={40}/>
        Visit my Github profile
      </VisitLink>
    </Container>
  )
}

function LanguageVis ({ show, percentage, name }) {
  const props = useSpring({ width: show ? `${percentage}%` : '0%' })

  return (
    <LanguageElement>
      <LanguageTextSide txtColor={LANGUAGES[name].color}>
        <span>{name}</span>
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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Avatar = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
`;

const Name = styled.h3`
  color: ${props => props.theme.light};
  font-size: 2em;
`;

const Subtitle = styled.h4`
  color: ${props => props.theme.light};
  font-size: 1.4em;
`;

const Description = styled.p`
  color: ${props => props.theme.lightText};
  font-size: 1.4em;
  @media (max-width: 700px) {
    text-align: center;
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
  img {
    width: 30px;
    height: 30px;
  }
`;

const LanguageTextSide = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
  span {
    font-weight: bold;
    font-size: 1.3em;
    color: ${props => colorWithOpacity(props.txtColor, 1) || props.theme.light};
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

const VisitLink = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.light};
  transition: 0.6s all ease;
  margin-top: 20px;
  &:hover {
    div {
      transform: scale(1.1);
      color: ${props => props.theme.vibrant};
    }
  }
`;

export default DeveloperProfile;
