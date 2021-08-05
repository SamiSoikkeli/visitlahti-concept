import React from "react"
import Layout from "../components/layout"

//Components
import HomeBanner from "../components/homePage/homeBanner"
import HomeContent from "../components/homePage/homeContent"
import HomeFeatured from "../components/homePage/homeFeatured"
import HomeAbout from "../components/homePage/homeAbout"
import HomeCards from "../components/homePage/homeCards"
import HomeGreen from "../components/homePage/homeGreen"
import HomeInspire from "../components/homePage/homeInspire"

//Context
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../context/globalContext"

const IndexPage = props => {
  const dispatch = useGlobalDispatchContext()
  const { cursorStyles } = useGlobalStateContext()
  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
  }

  return (
    <Layout>
      <HomeBanner onCursor={onCursor} />
      <HomeContent />
      <HomeFeatured onCursor={onCursor} />
      <HomeAbout onCursor={onCursor} />
      <HomeCards onCursor={onCursor} />
      <HomeGreen onCursor={onCursor} />
      <HomeInspire onCursor={onCursor} />
    </Layout>
  )
}

export default IndexPage
