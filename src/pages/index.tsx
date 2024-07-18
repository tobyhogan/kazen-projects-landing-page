import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import '../styles/global.css'
import '../styles/index.css'

import {NavBar} from '../components/navbar'

import tablescreenshot from '../images/habitazen.png'


const widgetsRowStyles = {
  margin: "auto",
  display: "flex",
  justifyContent: "space-between",

}

const projectWidgetStyles = {
  border: "2px solid black",
  borderRadius: "8px",
  width: "28%",
  margin: "1%",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",

}



const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <NavBar/>
      <main className="pb-20">
        <img src={tablescreenshot} className="w-96 border-2 mt-8"></img>
        <h1 className="text-2xl text-center mt-8">Strap Line Goes Here</h1>
        <div className="flex flex-col mx-auto w-fit mt-8">
          <a className='rounded-md py-2 px-3 text-white bg-slate-450 bg-slate-500 hover:bg-slate-400 hover:cursor-pointer'>Action Button</a>
          <a href="https://habit-tracker-indol-ten.vercel.app/" className="mt-4 underline text-blue-400 mx-auto">Alternate Action</a>
        </div>
        <h1 className="text-center text-xl mt-8">Features:</h1>
        <ul className="mx-auto w-fit mt-3">
          <li>- Feature 1</li>
          <li>- Feature 2</li>
          <li>- Feature 3</li>
        </ul>
      </main>
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Landing Page</title>
