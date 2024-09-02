//@ts-nocheck
import * as React from "react"
import type { HeadFC, PageProps, Link } from "gatsby"

import '../styles/global.css'
import '../styles/index.css'

import Header from '../components/header'
import Footer from '../components/footer'


import projectimage from '../assets/project-image.png'
import computerart from '../assets/computer-art.jpg'



const IndexPage: React.FC<PageProps> = () => {

  if (typeof window !== 'undefined') {
    console.log('we are running on the client')
  } else {
      console.log('we are running on the server');
  }

  return (
    <div className="flex flex-col">
      <Header />
      <main id="home" className="pt-20 pb-16">
        <h1 className="text-center mt-8 text-[26px]">Goals</h1>
        <h2 className="mt-4">Stuctural Issues Observed:</h2>
        <ul>
          <h3>Deferred Consequence Economics - <a href="/projects-org-landing-page/blog/deferred-consequence-economics" className="underline" target="_blank">Read More</a></h3>
            <h4>Where solutions are created to deal with the <i>effects</i> of actions, rather than solutions that deal with problematic actions directly.</h4>
          <h3>Planned Obselesence</h3>
            <h4>Products are engineered so they avoidably fail after a period of time.</h4>
          <h3 className="mt-4">Intentional Labour Creation</h3>
            <h4>Jobs and work are created where they do not need to be. <br />Think software re-organising it's menus and layout,
              making it harder to use, but developers can keep working
            </h4>
        </ul>
        <h2 className="mt-8">Areas:</h2>
        <ul>
            <h3>Government</h3>
            <h3>Business</h3>
        </ul>


      </main>
      <Footer />

    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Kazen Projects - Goals</title>
