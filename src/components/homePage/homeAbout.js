import React, { useState, useEffect } from "react"

// Styled Components
import { Container, Flex } from "../../styles/globalStyles"

//Framer Motion
import { motion, useAnimation } from "framer-motion"

//Home Component
import {
  HomeAboutSection,
  About,
  Services,
  AccordionHeader,
  AccordionContent,
  AccordionIcon,
} from "../../styles/homeStyles"

//Context
import { useGlobalStateContext } from "../../context/globalContext"

//Scroll Observer
import { useInView } from "react-intersection-observer"

// Accordion Data
const accordionIds = [
  {
    id: 0,
    title: "Events",
    results: [
      "Meetings and Events",
    ],
  },
  {
    id: 1,
    title: "Eeat and Drink",
    results: [
      "Vellamomenu",
    ],
  },
  {
    id: 2,
    title: "See and Do",
    results: [
      "Shopping tips",
      "Nature activities",
      "With children",
      "Sports Tourism",
      "Best of Lakeland Finland",
      "Sights and Museums",
      "Sustainable Travel"
    ],
  },
  {
    id: 3,
    title: "Accommodation",
    results: [
      "Hotels",
      "Cottages & Camping sites",
      "Manor houses & B&B's",
      "Hostels & Special destinations"
    ],
  },
  {
    id: 4,
    title: "Salpausselkä Geopark",
    results: [
      "A landscape created by water",
      "Salpausselkä ridges and chains of eskers",
      "Pristine waters",
      "What is a geopark?",
      "Contact Salpausselkä Geopark"
    ],
  },
]

const HomeAbout = ({ onCursor }) => {
  const [expanded, setExpanded] = useState(0)
  const animation = useAnimation()
  const [aboutRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-300px",
  })

  useEffect(() => {
    if (inView) {
      animation.start("visible")
    }
  }, [animation, inView])

  return (
    <HomeAboutSection
      ref={aboutRef}
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
        <Flex alignTop>
          <About>
            <h2>
            What makes Finland the happiest nation in the world? <br/> Its pure nature,
            high technology and topnotch education?
            </h2>
            <p>
            Yes, perhaps, but we also have the most instagrammable Lakeland and unique
            experiences by the water. One of a kind Nordic lifestyle and flavours.
            Inspiring wood and industrial design as well as professional centres for
            sports and wellbeing. The Lahti Region offers all of these, less than one hour
            drive from Helsinki.
            </p>
          </About>
          <Services>
            <h3>Information</h3>
            {accordionIds.map((details, index) => (
              <Accordion
                key={index}
                details={details}
                expanded={expanded}
                setExpanded={setExpanded}
                onCursor={onCursor}
              />
            ))}
          </Services>
        </Flex>
      </Container>
    </HomeAboutSection>
  )
}

const Accordion = ({ details, expanded, setExpanded, onCursor }) => {
  const isOpen = details.id === expanded
  const [hovered, setHovered] = useState(false)
  const { currentTheme } = useGlobalStateContext()
  return (
    <>
      <AccordionHeader
        initial={false}
        onClick={() => setExpanded(isOpen ? false : details.id)}
        whileHover={{
          color: !isOpen && currentTheme === "dark" ? "#ffffff" : "#223DAC",
        }}
        onHoverStart={() => setHovered(!hovered)}
        onHoverEnd={() => setHovered(!hovered)}
        onMouseEnter={() => onCursor("hovered")}
        onMouseLeave={onCursor}
      >
        <AccordionIcon>
          <motion.span
            animate={{ rotate: isOpen || hovered ? 0 : 45, x: 3 }}
            transition={{ duration: 0.2, ease: [0.6, 0.05, -0.01, 0.9] }}
          ></motion.span>
          <motion.span
            animate={{ rotate: isOpen || hovered ? 0 : -45, x: -3 }}
            transition={{ duration: 0.2, ease: [0.6, 0.05, -0.01, 0.9] }}
          ></motion.span>
        </AccordionIcon>
        {details.title}
      </AccordionHeader>
      <AccordionContent
        key="content"
        animate={{ height: isOpen ? "100%" : "0" }}
        transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
      >
        {details.results.map((result, index) => (
          <span
            key={index}
            onHoverStart={() => setHovered(!hovered)}
            onHoverEnd={() => setHovered(!hovered)}
            onMouseEnter={() => onCursor("hovered")}
            onMouseLeave={onCursor}
            >
            {result}
          </span>
        ))}
      </AccordionContent>
    </>
  )
}

export default HomeAbout
