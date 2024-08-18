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
      <main id="home" className="pt-20">
        <img src={computerart} className="border-2 border-slate-300 dark:border-slate-600 mt-12 rounded-lg"></img>
        <h1 className="text-center mt-8 text-2xl">Building Things That Matter</h1>

        <h2 id="clientwork">Areas:</h2>
        <ul>
          <h3>Kazen Software - Enterprise Projects</h3>
          <h3><a href="https://tobyhogan.github.io/consulting-landing-page" className="Link3" target="_blank">Kazen Consulting</a> - Business & Small Business</h3>
        </ul>
        <h2 id="clientwork">Client Work:</h2>
        <h3>Full:</h3>
        <ul>
          <a href="https://forwardstep.org" className="Link3" target="_blank">Forward Step</a>
        </ul>
        <h3>Partial and Consultation:</h3>
        <ul>
          <a href="https://www.theexcelexperts.com" className="Link3" target="_blank">The Excel Experts</a>
        </ul>
        <h2 id="clientwork">Enterprise Projects:</h2>
        <h3>Active:</h3>
        <ul>
          <a href="https://tobyhogan.github.io/" className="Link3" target="_blank">Habitazen Habit Tracker</a>
        </ul>
        <h3>In Development:</h3>
        <h2 id="contact">Contact</h2>
        <div className="mb-32"></div>

      </main>
      <Footer />

    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Kazen Projects</title>
