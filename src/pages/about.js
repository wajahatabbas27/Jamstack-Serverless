import { Link } from 'gatsby'
import React from 'react'
//import Footer from '../components/Footer'
//import Header from '../components/Header'
import Layout from '../components/Layout'
import * as styles from "./about.module.css";

const about = () => {
    return (
        <div>
            <Layout title="About Header" text="This is About component" footerTitle="About Footer">
                <br />
                <br />
                <div className={styles.myComponent}>
                    <h1 >Hello About Page! using Layout component</h1>
                </div>
                <br />
                <Link to="/">Home</Link>
                <br />
                <br />
            </Layout>
        </div>
    )
}

export default about
