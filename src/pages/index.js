import { Link } from "gatsby"
import React from "react"
//import Footer from "../components/Footer"
//import Header from "../components/Header"
import Layout from "../components/Layout"

export default function Home() {
  return (
    <div>
      <Layout title="Index Header" text="this is index component" footerTitle="Index Footer">

        <h1>Hello Index Page used LAyout component technique</h1>
        <br />
        <Link to="/about">About</Link>
        <br />
        <br />

      </Layout>
    </div>
  )
}
