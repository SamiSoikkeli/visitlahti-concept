import styled from "styled-components"
import { motion } from "framer-motion"

export const HeaderNav = styled(motion.div)`
  height: 0px;
  width: 100%;
  position: absolute;
  top: 72px;
  right: 0;
  left: 0;
  z-index: 99;
`
export const Logo = styled.div`
  a {
    font-size: 1.8rem;
    text-decoration: none;
    font-weight: 800;
    color: #000;
    color: ${props => props.theme.text};
  }
  span {
    height: 16px;
    width: 16px;
    background: #ea291e;
    margin: 0 4px;
    border-radius: 100%;
    display: inline-block;
    position: relative;
    bottom: 2px;
  }
  svg {
    fill: ${props => props.theme.text};
  }
  @media only screen and (max-width: 600px) {
    svg {
      width: 5rem;
    }
  }
`

export const NavIcons = styled.div`
  display: inline-block;
  margin-left: 45rem;
  a {
    margin: 0 0.5rem;
    svg {
      /* fill: ${props => props.theme.text};
      stroke: ${props => props.theme.text}; */
      &:hover {

      }
    }
    .shopSvg {
      fill: ${props => props.theme.text};
    }
    .mapSvg {
      fill: ${props => props.theme.text};
    }
    .searchSvg {
      stroke: ${props => props.theme.text};
    }
    .langSvg {
      stroke: ${props => props.theme.text};
      fill: ${props => props.theme.text};
    }
  }
  @media only screen and (max-width: 600px) {
    display: none;
  }
`

export const Menu = styled.div`
  button {
    transform-origin: center;
    border: none;
    padding: 20px;
    background: none;
    outline: none;
    span {
      width: 50px;
      height: 2px;
      display: block;
      background: ${props => props.theme.text};
      margin: 8px;
    }
  }
`
