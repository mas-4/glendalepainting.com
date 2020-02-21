import React from "react"

import {LayoutScroll, SEO} from "../components/global"


const NotFoundPage = () => (
  <LayoutScroll>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </LayoutScroll>
)

export default NotFoundPage
