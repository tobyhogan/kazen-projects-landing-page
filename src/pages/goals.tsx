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
        <h1 className="text-center mt-8 text-[26px]">Our Goals</h1>

        <h2 className="mt-8">Stuctural Issues:</h2>
        <ul>
          <h3>Planned Obselesence</h3>
          <h3>Intentional Labour Creation</h3>
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

export const Head: HeadFC = () => <title>Projects Org</title>
