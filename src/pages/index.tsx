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
        <img src={computerart} className="border-2 border-slate-300 dark:border-slate-600 mt-12 rounded-lg"></img>
        <h1 className="text-center mt-8 text-[26px]">Building Things That Matter</h1>

        <h2 id="clientwork" className="mt-8">Areas:</h2>
        <ul>
          <h4><a href="https://tobyhogan.github.io/software-landing-page/" className="Link3" target="_blank">Kazen Software</a> - Consumer App & Software Products</h4>
          <h4><a href="https://tobyhogan.github.io/consulting-landing-page" className="Link3" target="_blank">Kazen Consulting</a> - Solutions for Businesses & Individuals</h4>
          <h4><a href="https://tobyhogan.github.io/open-kz-landing-page" className="Link3" target="_blank">Kazen: Open KZ</a> - Open Source Systems & Technology</h4>
        </ul>
        <h2 id="clientwork" className="mt-8">Client Work:</h2>
        <h3>Full & Exclusive:</h3>
        <ul>
          <a href="https://forwardstep.org" className="Link3" target="_blank">Forward Step</a>
        </ul>
        <h3 className="mt-4">Partial and Consultation:</h3>
        <ul className="flex flex-col text-center">
          <a href="https://www.theexcelexperts.com" className="Link3" target="_blank">The Excel Experts</a>
          <a href="https://archetypebooks.net" className="Link3" target="_blank">Archetype Books</a>
          <a href="https://perrypoppins.co.uk" className="Link3" target="_blank">Perry Poppins Cleaning</a>
          <a href="https://ukkebabsfrome.co.uk" className="Link3" target="_blank">UK Kebab</a>
        </ul>
        <h2 id="clientwork" className="mt-8">Enterprise Projects:</h2>
        <h3>Active:</h3>
        <ul>
          <a href="https://tobyhogan.github.io/" className="Link3" target="_blank">Habitazen Habit Tracker</a>
        </ul>
        <h3>In Development:</h3>
        <h2 id="contact" className="mt-8">Contact</h2>

      </main>
      <Footer />

    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Kazen Projects</title>
