import styled from "styled-components";

// https://coolors.co/1a1c1e-ff3860-ff9a58-c6b198-f7f7f2

const colors = {
  eerieBlack: 'rgb(26,28,30)',
  radicalRed: 'rgb(255,56,96)',
  bone: '#FF9A58',
  hkaki: 'rgb(198,177,152)',
  babyPowder: 'rgba(247, 247, 242, 1)'
}

export const theme = {
  dark: colors.eerieBlack,
  vibrant: colors.radicalRed,
  link: colors.bone,
  lightText: colors.hkaki,
  light: colors.babyPowder
}

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: 12% auto;
  @media (max-width: 700px) {
    width: 90%;
    margin: 30% auto;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 3em;
  color: ${props => props.theme.vibrant};
  margin-bottom: 20px;
  @media (max-width: 700px) {
    text-align: center;
    line-height: 1.2;
  }
`;

export function colorWithOpacity (color, opacity) {
  let [r, g, b] = color
    .substring(color.indexOf('(') + 1, color.indexOf(')'))
    .split(',').map(e => e.trim());
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}
