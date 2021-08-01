import React from "react"
import Layout from "../components/layout"

//Components
import HomeBanner from "../components/homePage/HomeBanner"
import HomeContent from "../components/homePage/HomeContent"
import HomeFeatured from "../components/homePage/HomeFeatured"
import HomeAbout from "../components/homePage/HomeAbout"
import HomeCards from "../components/homePage/HomeCards"
import HomeGreen from "../components/homePage/HomeGreen"
import HomeInspire from "../components/homePage/HomeInspire"

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
