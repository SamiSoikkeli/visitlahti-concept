import React, { useEffect, useState } from "react"

//Scroll Observer
import { useInView } from "react-intersection-observer"
import { useAnimation } from "framer-motion"

//Styled Components
import { Flex } from "../../styles/globalStyles"
import {
  HomeCardSection,
  CardSectionContainer,
  CardTextContent,
  CardContent,
  Card
} from "../../styles/homeStyles"

//Card Carousel
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

const HomeCards = ({onCursor}) => {
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
    <HomeCardSection
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
      <CardSectionContainer>
        <Flex spaceBetween>
          <CardContent>
            <Carousel
              additionalTransfrom={0}
              arrows
              autoPlaySpeed={500}
              centerMode={false}
              className=""
              containerClass="container-with-dots"
              dotListClass=""
              draggable
              focusOnSelect={true}
              /* infinite */
              itemClass=""
              keyBoardControl
              minimumTouchDrag={80}
              renderButtonGroupOutside={true}
              renderDotsOutside={false}
              responsive={{
                desktop: {
                  breakpoint: {
                    max: 3000,
                    min: 1024
                  },
                  items: 2,
                  partialVisibilityGutter: 40
                },
                mobile: {
                  breakpoint: {
                    max: 464,
                    min: 0
                  },
                  items: 1,
                  partialVisibilityGutter: 30
                },
                tablet: {
                  breakpoint: {
                    max: 1024,
                    min: 464
                  },
                  items: 1,
                  partialVisibilityGutter: 30
                }
              }}
              showDots={false}
              sliderClass=""
              slidesToSlide={1}
              swipeable
            >
              <CardTextContent>
                <h3>EXAMPLE TIPS</h3>
                <h1>Get Inspired</h1>
                <p>Explore Lakeland Finland in Lahti region.</p>
              </CardTextContent>
              <Card>
                <img alt="Air BnB" src={require("../../assets/img/card-accommondation.jpg")}></img>
                <h1>Unique <br/> Accomondation</h1>
                <p>A cottage by Lake Päijänne, a B&B on a cosy farm, a modern city hotel or a design villa with all mod cons?</p>
                <button
                  onHoverStart={() => setHovered(!hovered)}
                  onHoverEnd={() => setHovered(!hovered)}
                  onMouseEnter={() => onCursor("hovered")}
                  onMouseLeave={onCursor}
                ><a href="/">Discover</a></button>
              </Card>
              <Card>
                <img alt="Morning Lake" src={require("../../assets/img/card-nature.jpg")}></img>
                <h1>Activities & <br/> Nature</h1>
                <p>The amazing lakes, ponds and rivers of the Finnish Lakeland, Päijänne National Park and countless nature reserves and hiking trails let you answer the call of the wild. Check the routes or book a guided tour.</p>
                <button
                  onHoverStart={() => setHovered(!hovered)}
                  onHoverEnd={() => setHovered(!hovered)}
                  onMouseEnter={() => onCursor("hovered")}
                  onMouseLeave={onCursor}
                ><a href="/">Discover</a></button>
              </Card>
              <Card>
                <img alt="Sibeliushouse" src={require("../../assets/img/card-sights.jpg")}></img>
                <h1>Sights & <br/> Museums</h1>
                <p>The iconic ski jumps in Lahti sports centre, beautiful harbour area, modern architectural highlights and museums – check all sights and enjoy your time in Lahti region</p>
                <button
                  onHoverStart={() => setHovered(!hovered)}
                  onHoverEnd={() => setHovered(!hovered)}
                  onMouseEnter={() => onCursor("hovered")}
                  onMouseLeave={onCursor}
                ><a href="/">Discover</a></button>
              </Card>
              <Card>
                <img alt="Harbour Restaurant" src={require("../../assets/img/card-eat.jpg")}></img>
                <h1>Eat & <br/> Drink</h1>
                <p>Local cuisine is famed for its fish, game, berries and mushrooms. Lahti Region boasts with local bakeries, farmers’ markets and breweries in the area. One of the key components to our excellent produce is the fresh and clean ground water.</p>
                <button
                  onHoverStart={() => setHovered(!hovered)}
                  onHoverEnd={() => setHovered(!hovered)}
                  onMouseEnter={() => onCursor("hovered")}
                  onMouseLeave={onCursor}
                ><a href="/">Discover</a></button>
              </Card>
              <Card>
                <img alt="Salpausselkä Geopark" src={require("../../assets/img/card-geopark.jpg")}></img>
                <h1>Salpausselkä <br/> Geopark</h1>
                <p>Steep ridges, high hills, rugged rocks and observation towers offer magnificent views of the surrounding nature. Admire the breathtaking Geopark landscapes and marvel at the beauty of nature.</p>
                <button
                  onHoverStart={() => setHovered(!hovered)}
                  onHoverEnd={() => setHovered(!hovered)}
                  onMouseEnter={() => onCursor("hovered")}
                  onMouseLeave={onCursor}
                ><a href="/">Discover</a></button>
              </Card>
              <Card>
                <img alt="Cultural Heritage" src={require("../../assets/img/card-culture.jpg")}></img>
                <h1>Cultural <br/> heritage</h1>
                <p>Churches full of history, fascinating museums and the built cultural landscape offer plenty of places that deserve a visit. Discover your favourite and embark on a cultural tour.</p>
                <button
                  onHoverStart={() => setHovered(!hovered)}
                  onHoverEnd={() => setHovered(!hovered)}
                  onMouseEnter={() => onCursor("hovered")}
                  onMouseLeave={onCursor}
                ><a href="/">Discover</a></button>
              </Card>
              <Card>
                <img alt="Iron Man Lahti" src={require("../../assets/img/card-sports.jpg")}></img>
                <h1>Sports <br/> Tourism</h1>
                <p>We provide premium conditions also used by world-class athletes. Make the most out of the Lahti region’s sports professionals and premium facilities.</p>
                <button
                  onHoverStart={() => setHovered(!hovered)}
                  onHoverEnd={() => setHovered(!hovered)}
                  onMouseEnter={() => onCursor("hovered")}
                  onMouseLeave={onCursor}
                ><a href="/">Discover</a></button>
              </Card>
            </Carousel>
          </CardContent>
        </Flex>
      </CardSectionContainer>
    </HomeCardSection>
  )
}

export default HomeCards
