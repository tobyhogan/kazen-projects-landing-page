import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import '../styles/global.css'
import '../styles/index.css'

import Header from '../components/header'
import Footer from '../components/footer'

// @ts-ignore
import tablescreenshot from '../assets/project-image.png'





const IndexPage: React.FC<PageProps> = () => {

  if (typeof window !== 'undefined') {
    console.log('we are running on the client')
  } else {
      console.log('we are running on the server');
  }

  return (
    <div className="flex flex-col">
      <Header />
      <main className="">
        <img src={tablescreenshot} className="border-2 border-slate-300 dark:border-slate-600 mt-12 rounded-lg"></img>
        <h1 className="text-center mt-8 text-2xl">Headline Goes Here</h1>
        <div className="flex flex-col mx-auto w-fit mt-8">
          <a className='Button2 rounded-md py-2 px-5 text-white dark:text-black bg-slate-500 dark:bg-emerald-600 hover:bg-slate-400 dark:hover:bg-[#3a8d72] hover:cursor-pointer'>Action Button</a>
          <a href="https://habit-tracker-indol-ten.vercel.app/" className="mt-4 underline text-blue-400 mx-auto">Alternate Action</a>
        </div>
        <h1 className="text-center text-xl mt-8">Features:</h1>
        <ul className="mx-auto w-fit mt-3 mb-[111px]">
          <li>- Feature 1</li>
          <li>- Feature 2</li>
          <li>- Feature 3</li>
        </ul>

      </main>
      <Footer />

    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Landing Page</title>
