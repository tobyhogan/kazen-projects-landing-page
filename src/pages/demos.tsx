import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import '../styles/global.css'
import '../styles/index.css'

import Header from '../components/header'
import Footer from '../components/footer'






const Demos: React.FC<PageProps> = () => {
  return (
    <div className="">
      <Header />
      <main className="flex flex-col">
        <h1 className="text-3xl pt-16">Demos</h1>
        <button className="Button1 mx-auto mt-8" onClick={() => alert("hello world")}>Inline Notification</button>
        <button className="Button1 mx-auto mt-8 mb-36" onClick={() => alert("hello world")}>Copy Text</button>
      </main>
      <Footer/>

    </div>
  )
}

export default Demos

export const Head: HeadFC = () => <title>Demos</title>
