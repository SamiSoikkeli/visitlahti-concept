import styled from "styled-components"
import { motion } from "framer-motion"

//----------------------------------------------------------------------------------------------------
//Banner
//----------------------------------------------------------------------------------------------------

export const Banner = styled.div`
  background: ${props => props.theme.background};
  height: 100vh;
  width: 100%;
  position: relative;
  margin-bottom: 296px;
`

export const BackgroundImage = styled.div`
  height: 100%;
  width: 100%;
  img {
    object-fit: cover;
  }
`
export const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  display: block;
`

export const BannerTitle = styled(motion.h1)`
  position: absolute;
  bottom: 0;
  left: -18px;
  color: ${props => props.theme.text};
  pointer-events: none;
`

export const Headline = styled(motion.span)`
  display: block;
  font-size: 10rem;
  font-weight: 900;
  line-height: 0.85;
  letter-spacing: -0.7rem;
  span {
    font-weight: 400;
  }
  @media only screen and (max-width: 768px) {
    font-size: 2.5rem;
    letter-spacing: 0rem;
  }
`

//----------------------------------------------------------------------------------------------------
//Content Section
//----------------------------------------------------------------------------------------------------

export const HomeContentSection = styled(motion.div)`
  margin-bottom: 200px;
`
export const Content = styled(motion.h2)`
  width: 70%;
  font-size: 2.3rem;
  font-weight: 400;
  margin-left: 124px;
  color: ${props => props.theme.text};
  @media only screen and (max-width: 768px) {
    width: 100%;
    font-size: 1.3rem;
    margin-left: 0;
  }
`

//----------------------------------------------------------------------------------------------------
//Featured Section
//----------------------------------------------------------------------------------------------------

export const HomeFeaturedSection = styled(motion.div)`
  margin-bottom: 650px;
  position: relative;
  a {
    margin-bottom: 200px;
    position: relative;
    display: block;
  }
  @media only screen and (max-width: 768px) {
    margin-bottom: 250px;
  }
`

export const FeaturedContent = styled(motion.div)`
  height: 480px;
  width: 100%;
  padding: 56px 124px;
  box-sizing: border-box;
  color: ${props => props.theme.text};
  h3 {
    font-size: 1.4rem;
    margin-left: 8rem;
  }
  .meta {
    display: flex;
    h4 {
      margin-left: 15rem;
      &:last-child {
        margin-left: 1rem;
      }
    }
  }

  .featured-title {
    z-index: 2;
    position: absolute;
    bottom: -460px;
    left: -160px;
    font-size: 7rem;
    font-weight: 900;
    line-height: 90px;
    margin: 0;
    letter-spacing: -0.4rem;
    .arrow {
      width: 120px;
      height: 80px;
      display: block;
      position: relative;
      overflow: hidden;
      svg {
        position: absolute;
        top: 16px;
        left: -48px;
        width: 108px;
        path {
          fill: ${props => props.theme.text};
        }
      }
    }
    @media only screen and (max-width: 768px) {
      bottom: -160px;
      left: 0;
      font-size: 2rem;
      line-height: 30px;
      letter-spacing: -0.12rem;
      .arrow{
        svg{
          //width: 58px;
        }
      }
    }
  }
`

export const FeaturedImage = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 829px;
  top: 0;
  left: 150px;
  display: block;
  overflow: hidden;
  img {
    transition: transform .5s ease;
    &:hover {
      transform: scale(1.02);
    }
  }
  @media only screen and (max-width: 768px) {
    left: 0;
    height: 100%;
  }
`

//----------------------------------------------------------------------------------------------------
//ABOUT SECTION
//----------------------------------------------------------------------------------------------------

export const HomeAboutSection = styled(motion.div)`
  /* margin-bottom: 200px; */
`

export const About = styled.div`
  width: 100%;
  h2 {
    width: 60%;
    font-size: 2.3rem;
    font-weight: 400;
    margin-left: 124px;
    color: ${props => props.theme.text};
  }
  p {
    max-width: 540px;
    font-size: 1rem;
    line-height: 1.6rem;
    margin-left: 124px;
    color: ${props => props.theme.text};
  }
  @media only screen and (max-width: 768px) {
    h2 {
      width: 90%;
      font-size: 1.3rem;
      margin-left: 0;
    }
    p {
      margin-left: 0;
    }
  }
`

export const Services = styled.div`
  h3 {
    color: ${props => props.theme.text} !important;
  }
`

export const AccordionHeader = styled(motion.div)`
  width: 100%;
  color: ${props => props.theme.text};
  height: 32px;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 1.15rem;
  margin: 8px 0;
`

export const AccordionIcon = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-right: 8px;
  span {
    width: 16px;
    height: 4px;
    background: ${props => props.theme.text};
    transition: all 0.1s ease-in-out;
  }
`

export const AccordionContent = styled(motion.div)`
  overflow: hidden;
  padding-left: 40px;
  span {
    width: 100%;
    margin: 15px 0;
    font-size: 0.875rem;
    color: ${props => props.theme.text};
    display: block;
    font-weight: 300;

    &:hover {
      text-decoration: underline;
    }
  }
`

//----------------------------------------------------------------------------------------------------
//Card carousel section
//----------------------------------------------------------------------------------------------------

export const HomeCardSection = styled(motion.div)`
  display: block;
  margin-top: 280px;
 /*  height: 100vh;
  color: #ffffff !important;
  background: #223DAC; */
  @media only screen and (max-width: 768px) {
    display: none;
    margin-top: 150px;
  }
`

export const CardSectionContainer = styled(motion.div)`
  /* padding-top: 6.5rem; */
`

export const CardTextContent = styled(motion.div)`
  //width: 50%;
  font-size: 2.3rem;
  font-weight: 400;
  padding-left: 15rem;
  padding-top: 20rem;
  margin-right: 10rem;
  color: ${props => props.theme.text};

  h3, h1, p {
    margin: 0 0 1rem 0;
  }
  h3 {
    font-size: 1.5rem;
  }
  h1 {
    font-size: 4rem;
    letter-spacing: -0.1rem;
  }
  p {
    font-size: 1.5rem;
    font-weight: 200;
  }
`

export const CardContent = styled(motion.div)`
  width: 100%;
  font-size: 2.3rem;
  font-weight: 400;
  color: ${props => props.theme.text};
  .react-multi-carousel-list {
    overflow: visible;
  }

  .react-multi-carousel-item {
    //margin-right: 7rem;
    //width: auto;
    margin-right: -30rem;
    transition: all .4s ease-in-out;
    &:hover {
      //transform: rotate(0.5deg);
      transform: scale(1.01);
    }
  }

  .react-multi-carousel-item:nth-child(1) {
    transition: none !important;
    transform: none !important;
    margin-right: 10rem;
  }

  .react-multiple-carousel__arrow {
    min-width: 52px;
    min-height: 52px;
    background: #ffffff;
    &::before {
      color: #223DAC;
    }
    &:hover {
      min-width: 72px;
      min-height: 72px;
      //border: 2px dotted #223DAC;
    }
  }
`

export const Card = styled(motion.div)`
  position: relative;
  height: 710px;
  width: 320px;
  margin-right: 2rem;
  padding: 2rem;
  overflow: hidden;

  img {
    //margin: 2rem;
    position: absolute;
    left: 0;
    top: 0;
    //border-radius: 30px;
    pointer-events: none;
  }

  h1, p {
    z-index: 100;
    position: absolute;
    color: #ffffff;
    pointer-events: none;
  }

  h1 {
    font-size: 2rem;
    top: 22rem;
    line-height: 0.9;
  }

  p {
    font-size: 1rem;
    font-weight: 100;
    bottom: 12rem;
    width: 85%;
  }

  button {
    a {
      color: #ffffff;
    }
    z-index: 100;
    position: absolute;
    color: #ffffff;
    font-size: 1.25rem;
    font-weight: 100;
    background: none;
    border: 1px solid #ffffff;
    border-radius: 50px;
    padding: 1.5rem 4rem;
    bottom: 5rem;
    left: 5rem;
    transition: color .8s;
    transition: background .5s;
    &:hover {
      background: #ffffff;
      a {
        color: #223DAC;
      }

    }
  }

  @media only screen and (max-width: 768px) {
    width: 160px;
    height: 355px;
  }
`

//----------------------------------------------------------------------------------------------------
//Green & Sustainability section
//----------------------------------------------------------------------------------------------------

export const HomeGreenSection = styled(motion.div)`
  margin-top: 8rem;
  color: ${props => props.theme.text};
`

export const GreenSectionContainer = styled(motion.div)`
  padding: 10rem 6.5rem;
  @media only screen and (max-width: 768px) {
   padding: 0;
  }
`

export const GreenImageContent = styled(motion.div)`
  width: 50%;
  @media only screen and (max-width: 768px) {
    width: 100%;
    /* .green-capital-img {
        width: 20rem;
    } */
  }
`

export const GreenTextContent = styled(motion.div)`
  width: 50%;
  margin-left: 10rem;

  h1, p {
    width: 90%;
  }

  h1 {
    font-size: 3rem;
    line-height: 0.9;
    letter-spacing: -0.1rem;
  }

  p {
    font-size: 1.5rem;
    font-weight: 100;
    margin-top: 4rem;
  }

  button {
    a {
      color: ${props => props.theme.text};
    }
    z-index: 100;
    font-size: 1.25rem;
    font-weight: 100;
    background: none;
    border: 1px solid #223DAC;
    border-radius: 50px;
    padding: 1.5rem 4rem;
    margin-left: 25%;
    margin-top: 3rem;
    transition: color .8s;
    transition: background .5s;
    &:hover {
      background: #223DAC;
      a {
        color: #ffffff;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-left: 2rem;
    button {
      margin-left: 5%;
    }
  }
`

//----------------------------------------------------------------------------------------------------
//Inspiration CTA Section
//----------------------------------------------------------------------------------------------------

export const HomeInspireSection = styled(motion.div)`
  margin-top: 200px;
  color: ${props => props.theme.text};
`

export const InspireSectionContainer = styled(motion.div)`

`

export const InspireHeaderContent = styled(motion.div)`
  text-align: center;
  margin-bottom: 10rem;
  h3, h1 {
    margin: 0;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    letter-spacing: -0.08rem;
  }

  h1 {
    font-size: 6rem;
    letter-spacing: -0.5rem;
  }
  @media only screen and (max-width: 768px) {
    h3 {
      font-size: 1rem;
    }

    h1 {
      font-size: 4rem;
      letter-spacing: -0.3rem;
    }
  }
`

export const InspireCardContent = styled(motion.div)`
  overflow: hidden;
  img {
    margin-bottom: 2rem;
    width: 100%;
    transition: transform .5s ease;
    &:hover {
      transform: scale(1.01);
    }
  }

  h2, p {
    font-size: 2.25rem;
    margin: 0;
    letter-spacing: -0.1rem;
  }

  h2 {

  }

  p {
    font-weight: 100;
  }
  @media only screen and (max-width: 768px) {
    h2, p {
      font-size: 1.25rem;
      padding-left: 1.5rem;
    }
  }
`

export const InspireCardFooter = styled(motion.div)`
  vertical-align: middle;
  margin-top: 1.5rem;
  .lineSvg {
    display: inline-block;
    stroke: ${props => props.theme.text};
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.text};
    font-size: 0.875rem;
    padding: 0 0.5rem 0 3rem;
    &:hover {
      text-decoration: underline;
    }
  }

  .arrowSvg {
    fill: ${props => props.theme.text};
    margin-left: 0.8rem;
    transition: transform .4s ease-in-out;
    &:hover {
      transform: rotate(-45deg);
    }
  }
  @media only screen and (max-width: 768px) {
    .lineSvg {
      display: none;
    }
    a {
      padding: 0 0.5rem 0 5rem;
    }
  }
`
