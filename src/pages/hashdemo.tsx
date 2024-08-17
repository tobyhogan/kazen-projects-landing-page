import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import '../styles/global.css'
import '../styles/index.css'

import Header from '../components/header'
import Footer from '../components/footer'






const HashDemo: React.FC<PageProps> = () => {
  return (
    <div className="">
      <Header />
      <main className="flex flex-col">
        <h1 className="text-3xl pt-12">URL Hash Demo</h1>
        <h2 className="mt-16 text-xl">Point Links:</h2>
        <ul className="flex flex-col w-fit mx-auto underline mt-8">
          <a href="#Point1">Point 1</a>
          <a href="#Point2">Point 2</a>
          <a href="#Point3">Point 3</a>
          <a href="#Point4">Point 4</a>
        </ul>
        <h2 className="text-2xl mt-32">Points:</h2>
        <section className="[&>h3]:text-xl [&>h3]:mb-96 mt-32">
          <h3 id="Point1" >Point 1</h3>
          <h3 id="Point2">Point 2</h3>
          <h3 id="Point3">Point 3</h3>
          <h3 id="Point4">Point 4</h3>
        </section>
      </main>
      <Footer/>

    </div>
  )
}

export default HashDemo

export const Head: HeadFC = () => <title>Url Hash Demo</title>
