import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import '../styles/global.css'
import '../styles/index.css'

import {Header} from '../components/header'
import {Footer} from '../components/footer'

import hero_image from '../images/hero_image.jpg'
import projects_image from '../images/projects_image.jpg'





const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Header/>
      <main className="pb-20">
        <img src={hero_image} className="w-96 pt-36"></img>
        <h1 className="mt-10">Building Things That Matter</h1>
        <h3>Building and Investing in Software, Finance and eCommerce Projects.</h3>
        <h2 id="projects" className="mt-16">Projects</h2>
        <img src={projects_image} className="w-[400px] mt-8" alt="" />
        <h2 id="contact" className="mt-16">Contact</h2>
      </main>
      <Footer />
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Landing Page</title>
