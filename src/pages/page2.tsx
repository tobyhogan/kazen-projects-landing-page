import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import '../styles/global.css'
import '../styles/index.css'

import Header from '../components/header'
import Footer from '../components/footer'






const Page2: React.FC<PageProps> = () => {
  return (
    <div className="">
      <Header />
      <main className="flex flex-col">
        <h1 className="text-3xl pt-16">Page 2</h1>
        <p className="mx-auto w-[50%] mt-8 mb-[59.9vh] text-center">
          This is some page 2 content here, you can write whatever you want about your project here, details and especially specifics to what might be on page 2
        </p>
      </main>
      <Footer />

    </div>
  )
}

export default Page2

export const Head: HeadFC = () => <title>Page 2</title>
