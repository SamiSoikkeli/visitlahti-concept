import React, { useState } from "react"
import { Link } from "gatsby"

//Styled Components
import { Container, Flex } from "../styles/globalStyles"
import {
  Nav,
  NavHeader,
  NavList,
  NavFooter,
  NavImages,
  CloseNav,
} from "../styles/navigationStyles"
import { FooterContent, FooterSocial } from "../styles/footerStyles"

//Icons
import { Instagram, Facebook, Twitter, Youtube } from "../assets/svg/social-icons"

//Framer Motion
import { motion, AnimatePresence } from "framer-motion"

const navRoutes = [
  {
    id: 0,
    title: "events",
    path: "/events",
    image: "nav-events.jpg",
  },
  {
    id: 1,
    title: "eat and drink",
    path: "/eat-and-drink",
    image: "nav-img1.jpg",
  },
  {
    id: 2,
    title: "see and do",
    path: "/see-and-do",
    image: "nav-see.jpg",
  },
  {
    id: 3,
    title: "accommodation",
    path: "/accommodation",
    image: "nav-accommodation.jpg",
  },
  {
    id: 4,
    title: "salpausselkä geopark",
    path: "/salpausselkä-geopark",
    image: "nav-geopark.jpg",
  },
]

const Navigation = ({ toggleMenu, setToggleMenu, onCursor }) => {
  const [revealImage, setRevealImage] = useState({
    show: false,
    image: "nav-events.jpg",
    key: "0",
  })

  return (
    <>
      <AnimatePresence>
        {toggleMenu && (
          <Nav
            initial={{ x: "-100%" }}
            exit={{ x: "-100%" }}
            animate={{ x: toggleMenu ? 0 : "-100%" }}
            transition={{ duration: 0.5, ease: [0.6, 0.05, -0.01, 0.9] }}
          >
            <Container>
              <NavHeader>
                <Flex spaceBetween noHeight>
                  {/* <h2 to="/">Menu</h2> */}
                  <Link to="/">
                    <svg
                      data-name="Layer 1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 425.323 259.218"
                      width="125"
                      height="76"
                      >
                      <path
                        d="M34.639 68.141h.227L61.216 0h8.856L38.727 80.407H30.55L0 0h9.086zM87.22 6.813a5.036 5.036 0 01-1.704 3.919 5.348 5.348 0 01-7.496 0 5.042 5.042 0 01-1.701-3.919 5.042 5.042 0 011.701-3.918 5.35 5.35 0 017.496 0 5.036 5.036 0 011.704 3.918zm-1.704 73.594H78.02v-53.15h7.496zm43.952-40.545a13.911 13.911 0 00-4.543-5.223 12.037 12.037 0 00-6.928-1.931 17.553 17.553 0 00-3.917.454 12.049 12.049 0 00-3.58 1.419 7.905 7.905 0 00-2.553 2.443 6.488 6.488 0 00-.967 3.633 6.027 6.027 0 002.612 5.452 25.745 25.745 0 007.837 2.953l7.61 1.817a18.104 18.104 0 019.255 5.053 13.086 13.086 0 013.69 9.484 14.92 14.92 0 01-1.759 7.438 15.09 15.09 0 01-4.656 5.11 19.892 19.892 0 01-6.643 2.897 32.214 32.214 0 01-7.61.909 27.986 27.986 0 01-11.414-2.329 21.049 21.049 0 01-9.028-8.006l6.472-4.43a17.834 17.834 0 005.736 5.793 15.255 15.255 0 008.234 2.157 20.657 20.657 0 004.543-.511 13.167 13.167 0 004.03-1.59 8.657 8.657 0 002.84-2.782 7.262 7.262 0 001.08-3.975 6.166 6.166 0 00-2.953-5.735 25.92 25.92 0 00-7.156-2.783l-7.268-1.704q-1.363-.34-3.69-1.135a17.333 17.333 0 01-4.544-2.386 14.303 14.303 0 01-3.803-4.144 11.688 11.688 0 01-1.59-6.304 14.876 14.876 0 011.645-7.154 14.098 14.098 0 014.43-4.997 20.441 20.441 0 016.302-2.896 27.391 27.391 0 017.27-.966 24.796 24.796 0 0110.335 2.158 15.22 15.22 0 017.382 7.383zm28.847-33.049a5.036 5.036 0 01-1.704 3.919 5.348 5.348 0 01-7.496 0 5.036 5.036 0 01-1.704-3.919 5.036 5.036 0 011.704-3.918 5.35 5.35 0 017.496 0 5.036 5.036 0 011.704 3.918zm-1.704 73.594h-7.496v-53.15h7.496zm43.268-46.337h-15.333v31.346a16.973 16.973 0 00.568 4.825 6.825 6.825 0 001.59 2.898 5.465 5.465 0 002.443 1.418 11.466 11.466 0 003.122.398 14.752 14.752 0 003.975-.568 18.337 18.337 0 003.748-1.475l.341 6.927a24.091 24.091 0 01-10.108 1.931 18.899 18.899 0 01-4.485-.568 10.578 10.578 0 01-4.26-2.158 11.879 11.879 0 01-3.18-4.316 17.308 17.308 0 01-1.25-7.154V34.071h-11.242v-6.815h11.242v-14.99h7.496v14.99h15.333zM77.478 94.24h24.336v87.977h45.08v22.462H77.478zm128.844 100.924h-.312a22.027 22.027 0 01-10.375 8.735 35.662 35.662 0 01-13.648 2.652 35.207 35.207 0 01-10.216-1.482 25.774 25.774 0 01-8.66-4.446 21.451 21.451 0 01-5.925-7.33 22.33 22.33 0 01-2.184-10.14 23.239 23.239 0 012.416-11.076 21.612 21.612 0 016.552-7.486 32.55 32.55 0 019.436-4.602 68.9 68.9 0 0111-2.418 105.22 105.22 0 0111.384-.936q5.696-.155 10.532-.156a12.176 12.176 0 00-4.448-9.906 16.042 16.042 0 00-10.528-3.664 22.91 22.91 0 00-10.528 2.416 28.801 28.801 0 00-8.504 6.63l-12.476-12.79a42.887 42.887 0 0115.284-9.126 54.644 54.644 0 0118.096-3.042q10.296 0 16.924 2.574a24.63 24.63 0 0110.608 7.566 29.138 29.138 0 015.536 12.244 80.448 80.448 0 011.56 16.768v38.53h-21.524zm-5.772-23.711q-2.654 0-6.631.234a33.678 33.678 0 00-7.641 1.326 17.06 17.06 0 00-6.24 3.276 7.551 7.551 0 00-2.576 6.084 6.69 6.69 0 003.588 6.24 14.991 14.991 0 007.488 2.028 23.468 23.468 0 006.628-.936 19.795 19.795 0 005.696-2.652 12.82 12.82 0 003.976-4.368 12.57 12.57 0 001.484-6.24v-4.992zm66.76-84.7v52.412h.313a14.1 14.1 0 012.652-4.368 20.77 20.77 0 014.523-3.9 24.622 24.622 0 016.24-2.808 26.704 26.704 0 017.8-1.092q8.892 0 14.349 2.73a20.763 20.763 0 018.503 7.566 30.588 30.588 0 014.133 11.386 86.61 86.61 0 011.092 14.196v41.804h-23.397v-37.126q0-3.276-.235-6.784a21.412 21.412 0 00-1.404-6.474 11.182 11.182 0 00-3.588-4.836q-2.42-1.872-6.94-1.872a14.444 14.444 0 00-7.332 1.638 11.152 11.152 0 00-4.289 4.368 17.772 17.772 0 00-1.951 6.162 53.098 53.098 0 00-.468 7.174v37.75h-23.397V86.753zm119.173 60.834H365.89v25.27a47.323 47.323 0 00.312 5.694 11.51 11.51 0 001.404 4.446 7.08 7.08 0 003.355 2.886 14.841 14.841 0 006.005 1.014 40.37 40.37 0 004.915-.39 8.321 8.321 0 004.6-1.794v19.498a35.43 35.43 0 01-8.112 1.872 74.826 74.826 0 01-8.267.468 44.96 44.96 0 01-10.917-1.248 24.85 24.85 0 01-8.736-3.978 18.629 18.629 0 01-5.851-7.096 24.261 24.261 0 01-2.105-10.608v-36.034H327.52v-18.718h14.976v-22.462h23.396v22.462h20.592zm11.699-42.584a13.576 13.576 0 113.977 9.594 13.073 13.073 0 01-3.977-9.594zm1.872 23.866h23.397v75.81h-23.397zM78.24 225.666h4.474v28.8H97.86v4.193H78.241zm23.02 13.607a13.028 13.028 0 018.761-3.262c6.524 0 9.227 3.542 9.227 7.363v11.277a34.068 34.068 0 00.187 4.008h-3.728q-.14-1.678-.14-3.355h-.094c-1.863 2.842-4.38 3.914-7.736 3.914-4.1 0-7.642-2.33-7.642-6.617 0-5.685 5.453-7.643 12.163-7.643h3.076v-.931c0-2.284-1.678-4.66-5.266-4.66-3.216 0-4.753 1.351-6.291 2.516zm11.837 8.761c-3.96 0-8.807.7-8.807 4.24 0 2.517 1.864 3.59 4.753 3.59 4.66 0 6.291-3.45 6.291-6.432v-1.398zm12.069-24.604h4.194v22.74l9.506-9.553h5.826l-10.3 10.019 11.185 12.023h-5.965l-10.252-11.464v11.464h-4.194zm27.168 25.723c0 3.867 3.588 6.43 7.456 6.43 2.563 0 4.427-1.304 6.058-3.308l3.169 2.423c-2.33 3.029-5.546 4.52-9.786 4.52-6.99 0-11.37-5.033-11.37-11.603a11.194 11.194 0 0111.416-11.604c7.783 0 10.765 5.965 10.765 11.65v1.491zm13.234-3.356c-.093-3.68-2.143-6.43-6.384-6.43a6.816 6.816 0 00-6.85 6.43zm9.646-22.367h4.194v35.23h-4.194zm10.764 15.843a13.028 13.028 0 018.761-3.262c6.524 0 9.227 3.542 9.227 7.363v11.277a34.091 34.091 0 00.186 4.008h-3.728q-.14-1.678-.14-3.355h-.093c-1.864 2.842-4.38 3.914-7.736 3.914-4.1 0-7.642-2.33-7.642-6.617 0-5.685 5.452-7.643 12.163-7.643h3.075v-.931c0-2.284-1.677-4.66-5.266-4.66-3.215 0-4.753 1.351-6.29 2.516zm11.837 8.761c-3.961 0-8.808.7-8.808 4.24 0 2.517 1.865 3.59 4.754 3.59 4.66 0 6.29-3.45 6.29-6.432v-1.398zm12.069-11.464h4.194v3.402h.093c1.072-2.33 3.868-3.96 7.27-3.96 4.287 0 8.015 2.562 8.015 8.434v14.213h-4.194v-13.048c0-4.147-2.376-5.685-5.033-5.685-3.495 0-6.15 2.237-6.15 7.362v11.371h-4.195zm47.859 22.089h-4.195v-3.169h-.093a9.43 9.43 0 01-7.689 3.728c-6.85 0-11.23-5.08-11.23-11.604 0-6.617 4.426-11.603 11.23-11.603a9.242 9.242 0 017.69 3.728h.092v-16.31h4.195zm-4.195-11.044c0-4.474-2.796-7.69-7.27-7.69s-7.27 3.216-7.27 7.69 2.797 7.69 7.27 7.69 7.27-3.217 7.27-7.69zm24.185-21.949h20.737v4.194h-16.264v10.345h15.146v4.194h-15.145v14.26h-4.474zm27.914-.093a3.076 3.076 0 11-3.076 3.075 3.103 3.103 0 013.075-3.075zm-2.098 10.998h4.194v22.088h-4.194zm10.671-.001h4.194v3.402h.093c1.072-2.33 3.868-3.96 7.27-3.96 4.288 0 8.015 2.562 8.015 8.434v14.213h-4.194v-13.048c0-4.147-2.376-5.685-5.032-5.685-3.495 0-6.152 2.237-6.152 7.362v11.371h-4.194zm26.05-13.14h4.194v35.23h-4.194zm10.764 15.843a13.027 13.027 0 018.76-3.262c6.524 0 9.228 3.542 9.228 7.363v11.277a34.1 34.1 0 00.186 4.008h-3.728q-.14-1.678-.14-3.355h-.093c-1.864 2.842-4.38 3.914-7.736 3.914-4.1 0-7.642-2.33-7.642-6.617 0-5.685 5.452-7.643 12.162-7.643h3.076v-.931c0-2.284-1.678-4.66-5.266-4.66-3.215 0-4.753 1.351-6.291 2.516zm11.836 8.761c-3.96 0-8.808.7-8.808 4.24 0 2.517 1.865 3.59 4.754 3.59 4.66 0 6.29-3.45 6.29-6.432v-1.398zm12.07-11.464h4.194v3.402h.093c1.072-2.33 3.868-3.96 7.27-3.96 4.287 0 8.015 2.562 8.015 8.434v14.213h-4.194v-13.048c0-4.147-2.377-5.685-5.033-5.685-3.495 0-6.151 2.237-6.151 7.362v11.371h-4.194zm47.858 22.089h-4.194v-3.169h-.094a9.43 9.43 0 01-7.689 3.728c-6.85 0-11.23-5.08-11.23-11.604 0-6.617 4.426-11.603 11.23-11.603a9.242 9.242 0 017.689 3.728h.093v-16.31h4.195zm-4.194-11.044c0-4.474-2.796-7.69-7.27-7.69s-7.27 3.216-7.27 7.69 2.796 7.69 7.27 7.69 7.27-3.217 7.27-7.69z"
                        fill="#ffffff"
                        >
                      </path>
                    </svg>
                  </Link>
                  <CloseNav
                    onClick={() => setToggleMenu(!toggleMenu)}
                    onMouseEnter={() => onCursor("pointer")}
                    onMouseLeave={onCursor}
                  >
                    <button>
                      <span></span>
                      <span></span>
                    </button>
                  </CloseNav>
                </Flex>
              </NavHeader>
              <NavList>
                <ul>
                  {navRoutes.map(route => (
                    <motion.li
                      key={route.id}
                      onMouseEnter={() => onCursor("pointer")}
                      onMouseLeave={onCursor}
                      onHoverStart={() =>
                        setRevealImage({
                          show: true,
                          image: route.image,
                          key: route.id,
                        })
                      }
                      onHoverEnd={() =>
                        setRevealImage({
                          show: false,
                          image: route.image,
                          key: route.id,
                        })
                      }
                    >
                      <Link to={`/projects${route.path}`}>
                        <motion.div
                          initial={{ x: -108 }}
                          className="link"
                          whileHover={{
                            x: -40,
                            transition: {
                              duration: 0.4,
                              ease: [0.6, 0.05, -0.01, 0.9],
                            },
                          }}
                        >
                          <span className="arrow">
                            <motion.svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 101 57"
                            >
                              <path
                                d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                                fill="#000"
                                fillRule="evenodd"
                              ></path>
                            </motion.svg>
                          </span>
                          {route.title}
                        </motion.div>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </NavList>
              <NavFooter>
                <Flex spaceBetween>
                  <FooterContent>
                    <p>sales@lahtiregion</p>
                  </FooterContent>
                  <FooterContent wider>
                    <p>+358 (0)207 281 760</p>
                  </FooterContent>
                  <FooterSocial>
                    <a
                      onMouseEnter={() => onCursor("pointer")}
                      onMouseLeave={onCursor}
                      href="/"
                      target="_blank"
                    >
                      <Instagram />
                    </a>
                    <a
                      onMouseEnter={() => onCursor("pointer")}
                      onMouseLeave={onCursor}
                      href="/"
                      target="_blank"
                    >
                      <Facebook />
                    </a>
                    <a
                      onMouseEnter={() => onCursor("pointer")}
                      onMouseLeave={onCursor}
                      href="/"
                      target="_blank"
                      >
                      <Twitter />
                    </a>
                    <a
                      onMouseEnter={() => onCursor("pointer")}
                      onMouseLeave={onCursor}
                      href="/"
                      target="_blank"
                      >
                      <Youtube />
                    </a>
                  </FooterSocial>
                </Flex>
              </NavFooter>
              <NavImages>
                <motion.div
                  animate={{ width: revealImage.show ? 0 : "100%" }}
                  className="reveal"
                ></motion.div>
                <motion.div className="nav__image">
                  <AnimatePresence initial={false} exitBeforeEnter>
                    <motion.img
                      key={revealImage.key}
                      src={require(`../assets/img/${revealImage.image}`)}
                      initial={{ opacity: 0 }}
                      exit={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                      }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                    ></motion.img>
                  </AnimatePresence>
                </motion.div>
              </NavImages>
            </Container>
          </Nav>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation
