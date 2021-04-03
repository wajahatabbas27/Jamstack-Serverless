import { Link } from "gatsby"
import React from "react"
//import Footer from "../components/Footer"
//import Header from "../components/Header"
import Layout from "../components/Layout"
import Button from '@material-ui/core/Button';

export default function Home() {
  return (
    <div>
      <Layout title="Index Header" text="this is index component" footerTitle="Index Footer">

        <h1>Hello Index Page used LAyout component technique</h1>
        <br />
        <Link to="/about">About</Link>
        <br />
        <br />
        <Link to="/dynamicPage">My Dynamic Page</Link>
        <br />
        <br />
        <Link to="/app/">My Client side Routes main page</Link>
        <br />
        <br />
        <Link to="/app/page1">My Client side Routes</Link>

        <br />
        <br />
        <Button color="secondary" variant="contained">
          Hello From material UI
        </Button>

      </Layout>
    </div>
  )
}
