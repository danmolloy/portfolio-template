import React from "react"
import Hero from "./hero"
import ImageGallery from "./imageGallery"
import Posts from "./posts"
import SignUp from "./signUp"
import WorkHistory from "./workHistory"

export default function HomeComponent() {
  return (
    <div data-testid="home-component">
      <Hero />
      <ImageGallery />
      <Posts />
      <SignUp />
      <WorkHistory />
    </div>
  )
}