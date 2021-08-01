import styled from "styled-components"
import { motion } from "framer-motion"

export const Nav = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  background: #223DAC;
  color: #000;
  z-index: 100;
  overflow: hidden;
`

export const NavHeader = styled.div`
  top: 72px;
  position: relative;
  h2 {
    //color: ${props => props.theme.background};
    color: #ffffff;
  }
`
export const CloseNav = styled.div`
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
      //background: ${props => props.theme.background};
      background: #ffffff;
      margin: 8px;
    }
  }
`

export const NavList = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  ul {
    padding: 0;
    li {
      list-style: none;
      font-size: 3rem;
      text-transform: uppercase;
      font-weight: 900;
      height: 96px;
      line-height: 96px;
      overflow: hidden;
      .link {
        //color: ${props => props.theme.background};
        color: #ffffff;
        position: relative;
        display: flex;
        align-items: center;
        .arrow {
          height: 76px;
          margin-right: 8px;
        }
      }
      svg {
        width: 100px;
        path {
          //fill: ${props => props.theme.background};
          fill: #ffffff;
        }
      }
    }
  }
`
export const NavFooter = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 56px 0px;
  p {
    //color: ${props => props.theme.background};
    color: #ffffff;
  }
  svg path {
    //fill: ${props => props.theme.background};
    fill: #ffffff;
  }
`

export const NavImages = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 25%;
  z-index: -1;
  height: 100%;
  width: 100%;
  background: #000;
  .reveal {
    width: 100%;
    background: #223DAC;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
  }

  .nav__image {
    background: #000;
    position: absolute;
    height: 100%;
    margin: 0;
    z-index: -1;
    img {
      height: 100%;
    }
  }
`
