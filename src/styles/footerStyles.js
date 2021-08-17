import styled, { css } from "styled-components"
import { motion } from "framer-motion"

export const FooterNav = styled(motion.div)`
  height: 300px;
  margin-top: 296px;
  @media only screen and (max-width: 768px) {
    opacity: 1 !important;
    transform: translateY(0px) translateZ(0px);
  }
`

export const FooterContent = styled.div`
  color: ${props => props.theme.text};
  font-size: 22px;
  font-weight: 600;
  line-height: 8px;
  flex: 1;
  ${props =>
    props.wider &&
    css`
      flex: 2;
    `}
`

export const FooterSocial = styled.div`
  display: flex;
  position: relative;
  a {
    position: relative;
    display: block;
    width: 24px;
    height: 24px;
    padding: 8px;
    svg {
      width: 100%;
      height: 100%;
      fill: ${props => props.theme.text};
    }
  }
`
