import React, { useEffect, useState } from "react"

//Scroll Observer
import { useInView } from "react-intersection-observer"
import { useAnimation } from "framer-motion"

//Styled Components
import { Flex } from "../../styles/globalStyles"
import {
  HomeGreenSection,
  GreenSectionContainer,
  GreenTextContent,
  GreenImageContent
} from "../../styles/homeStyles"


const HomeGreen = ({onCursor}) => {
  const [hovered, setHovered] = useState(false)
  const animation = useAnimation()
  const [contentRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-300px",
  })

  useEffect(() => {
    if (inView) {
      animation.start("visible")
    }
  }, [animation, inView])

  return (
    <HomeGreenSection
      ref={contentRef}
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
      <GreenSectionContainer>
        <Flex spaceBetween>
          <GreenImageContent>
            <img
              className="green-capital-img"
              alt="Green Capital"
              src={require("../../assets/img/green-capital.jpg")}
            ></img>
          </GreenImageContent>
          <GreenTextContent>
            <h1>Travel Sustainably in the Lahti Region</h1>
            <p>In the Lahti region, you can experience pure and diverse nature sustainably.
              Taking care of nature and lakes is a goal shared by everyone in our region.
              Lahti is Finland’s leading city when it comes to environmental issues, a frontrunner
              in climate work, a pioneer in sustainable and smart solutions and the European Green Capital 2021.</p>
            <button
              onHoverStart={() => setHovered(!hovered)}
              onHoverEnd={() => setHovered(!hovered)}
              onMouseEnter={() => onCursor("hovered")}
              onMouseLeave={onCursor}
            >
              <a href="/">Read more</a>
            </button>
          </GreenTextContent>
        </Flex>
      </GreenSectionContainer>
    </HomeGreenSection>
  )
}

export default HomeGreen
