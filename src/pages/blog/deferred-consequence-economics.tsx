//@ts-nocheck
import * as React from "react"
import type { HeadFC, PageProps, Link } from "gatsby"

import '../../styles/global.css'
import '../../styles/index.css'

import Header from '../../components/header'
import Footer from '../../components/footer'


import projectimage from '../../assets/project-image.png'
import computerart from '../../assets/computer-art.jpg'



const IndexPage: React.FC<PageProps> = () => {

  if (typeof window !== 'undefined') {
    console.log('we are running on the client')
  } else {
      console.log('we are running on the server');
  }

  return (
    <div className="flex flex-col">
      <Header />
      <main id="home" className="pt-20 pb-24">
        <h1 className="text-center mt-12 text-[26px]">Deferred Consequence Economics</h1>
        <h4 className="mt-6">Where solutions are created to deal with the <i>effects</i> of actions, rather than solutions that deal with those actions directly</h4>
        <h3 className="mt-4">Examples: </h3>
        <ul className="mx-auto mt-3 w-fit text-left">
          <h4 className="">- Hospitals treating people for conditions that are the results of their lifestyle, instead of working on altering that lifestyle.</h4>
          <h4 className="">- Having: traffic, air and noise pollution and high sedentary behaviour resulting from car over-use and needing to fix those secondary problems seperately.</h4>
        </ul>
      

      </main>
      <Footer />

    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Kazen Projects - Goals</title>
