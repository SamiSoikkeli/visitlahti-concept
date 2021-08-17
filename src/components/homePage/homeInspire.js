import React, { useEffect, useState } from "react"

//Scroll Observer
import { useInView } from "react-intersection-observer"
import { useAnimation } from "framer-motion"

//Styled Components
import { Flex } from "../../styles/globalStyles"
import {
  HomeInspireSection,
  InspireSectionContainer,
  InspireHeaderContent,
  InspireCardContent,
  InspireCardFooter
} from "../../styles/homeStyles"


const HomeInspire = ({onCursor}) => {
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
    <HomeInspireSection
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
      <InspireSectionContainer>

          <InspireHeaderContent>
            <h3>GET A GLIMPSE OF WHAT YOU CAN EXPERIENCE</h3>
            <h1>Inspiring Places</h1>
          </InspireHeaderContent>
          <Flex spaceAround>
          <InspireCardContent>
            <img
              alt="Salpausselkä Geopark"
              src={require("../../assets/img/geopark.jpg")}
            ></img>
            <h2>Salpausselkä Geopark</h2>
            <p>A Landscape Created by Water</p>
            <InspireCardFooter>
              <svg className="lineSvg" width="335" height="3" viewBox="0 0 335 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="0.677734" y1="1.09131" x2="334.678" y2="1.09131" strokeWidth="2"/>
              </svg>
              <a
                onHoverStart={() => setHovered(!hovered)}
                onHoverEnd={() => setHovered(!hovered)}
                onMouseEnter={() => onCursor("hovered")}
                onMouseLeave={onCursor}
                href="/"
              >READ MORE
                <svg className="arrowSvg" width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0.476563 6.89026C0.476562 6.6582 0.56875 6.43564 0.732844 6.27154C0.896939 6.10745 1.1195 6.01526 1.35156 6.01526L11.4893 6.01526L7.73206 2.25977C7.56776 2.09546 7.47546 1.87262 7.47546 1.64027C7.47546 1.40791 7.56776 1.18507 7.73206 1.02077C7.89636 0.856464 8.1192 0.76416 8.35156 0.76416C8.58392 0.76416 8.80676 0.856464 8.97106 1.02077L14.2211 6.27076C14.3025 6.35204 14.3672 6.4486 14.4113 6.5549C14.4554 6.66121 14.4781 6.77517 14.4781 6.89026C14.4781 7.00536 14.4554 7.11932 14.4113 7.22562C14.3672 7.33192 14.3025 7.42848 14.2211 7.50976L8.97106 12.7598C8.80676 12.9241 8.58392 13.0164 8.35156 13.0164C8.1192 13.0164 7.89636 12.9241 7.73206 12.7598C7.56776 12.5955 7.47546 12.3726 7.47546 12.1403C7.47546 11.9079 7.56776 11.6851 7.73206 11.5208L11.4893 7.76526L1.35156 7.76526C1.1195 7.76526 0.896939 7.67308 0.732844 7.50898C0.56875 7.34489 0.476562 7.12233 0.476563 6.89026Z" />
                </svg>
              </a>
            </InspireCardFooter>
          </InspireCardContent>
          <InspireCardContent>
            <img
              alt="Lahti harbour"
              src={require("../../assets/img/harbor.jpg")}
            ></img>
            <h2>Lahti Harbour</h2>
            <p>The Summer living room of Lahti</p>
            <InspireCardFooter>
              <svg className="lineSvg" width="335" height="3" viewBox="0 0 335 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="0.677734" y1="1.09131" x2="334.678" y2="1.09131" strokeWidth="2"/>
              </svg>
              <a
                onHoverStart={() => setHovered(!hovered)}
                onHoverEnd={() => setHovered(!hovered)}
                onMouseEnter={() => onCursor("hovered")}
                onMouseLeave={onCursor}
                href="/"
              >READ MORE
                <svg className="arrowSvg" width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0.476563 6.89026C0.476562 6.6582 0.56875 6.43564 0.732844 6.27154C0.896939 6.10745 1.1195 6.01526 1.35156 6.01526L11.4893 6.01526L7.73206 2.25977C7.56776 2.09546 7.47546 1.87262 7.47546 1.64027C7.47546 1.40791 7.56776 1.18507 7.73206 1.02077C7.89636 0.856464 8.1192 0.76416 8.35156 0.76416C8.58392 0.76416 8.80676 0.856464 8.97106 1.02077L14.2211 6.27076C14.3025 6.35204 14.3672 6.4486 14.4113 6.5549C14.4554 6.66121 14.4781 6.77517 14.4781 6.89026C14.4781 7.00536 14.4554 7.11932 14.4113 7.22562C14.3672 7.33192 14.3025 7.42848 14.2211 7.50976L8.97106 12.7598C8.80676 12.9241 8.58392 13.0164 8.35156 13.0164C8.1192 13.0164 7.89636 12.9241 7.73206 12.7598C7.56776 12.5955 7.47546 12.3726 7.47546 12.1403C7.47546 11.9079 7.56776 11.6851 7.73206 11.5208L11.4893 7.76526L1.35156 7.76526C1.1195 7.76526 0.896939 7.67308 0.732844 7.50898C0.56875 7.34489 0.476562 7.12233 0.476563 6.89026Z" />
                </svg>
              </a>
            </InspireCardFooter>
          </InspireCardContent>
        </Flex>
      </InspireSectionContainer>
    </HomeInspireSection>
  )
}

export default HomeInspire
