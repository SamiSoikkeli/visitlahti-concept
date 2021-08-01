import React, { useEffect, useRef } from "react"

// Scroll Animations
import { useInView } from "react-intersection-observer"
import { useAnimation } from "framer-motion"

//Styled Components
import { Container, Flex } from "../styles/globalStyles"
import { FooterNav, FooterContent, FooterSocial } from "../styles/footerStyles"

//Icons
import { Instagram, Facebook, Twitter, Youtube  } from "../assets/svg/social-icons"

//Custom Hooks
import useElementPosition from "../hooks/useElementPosition"

const Footer = ({ setHamburgerPosition, onCursor }) => {
  const instagramRef = useRef(null)
  const instagramPosition = useElementPosition(instagramRef)

  const facebookRef = useRef(null)
  const facebookPosition = useElementPosition(facebookRef)

  const twitterRef = useRef(null)
  const twitterPosition = useElementPosition(twitterRef)

  const youtubeRef = useRef(null)
  const youtubePosition = useElementPosition(youtubeRef)

  const animation = useAnimation()
  const [footerRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px",
  })
  useEffect(() => {
    if (inView) {
      animation.start("visible")
    }
  }, [animation, inView])

  const menuHover = x => {
    onCursor("locked")
    setHamburgerPosition({ x: x })
  }

  return (
    <FooterNav
      ref={footerRef}
      animate={animation}
      initial="hidden"
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] },
        },
        hidden: { opacity: 0, y: 72 },
      }}
    >
      <Container>
        <Flex spaceBetween>
          <FooterContent>
            <p>+358 (0)207 281 760</p>
            <p>sales@lahtiregion</p>
          </FooterContent>
          <FooterContent wider>
            <p>Salpausselänkatu 7</p>
            <p>FIN-15110 Lahti</p>
          </FooterContent>
          <FooterSocial>
            <a
              onMouseEnter={() => menuHover(instagramPosition.x)}
              onMouseLeave={onCursor}
              ref={instagramRef}
              href="/"
              target="_blank"
            >
              <Instagram />
            </a>
            <a
              onMouseEnter={() => menuHover(facebookPosition.x)}
              onMouseLeave={onCursor}
              ref={facebookRef}
              href="/"
              target="_blank"
            >
              <Facebook />
            </a>
            <a
              onMouseEnter={() => menuHover(twitterPosition.x)}
              onMouseLeave={onCursor}
              ref={twitterRef}
              href="/"
              target="_blank"
            >
              <Twitter />
            </a>
            <a
              onMouseEnter={() => menuHover(youtubePosition.x)}
              onMouseLeave={onCursor}
              ref={youtubeRef}
              href="/"
              target="_blank"
            >
              <Youtube />
            </a>
          </FooterSocial>
        </Flex>
      </Container>
    </FooterNav>
  )
}

export default Footer
