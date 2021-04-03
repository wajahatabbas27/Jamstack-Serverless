import React from 'react'
import Layout from '../components/Layout'
import { Router } from '@reach/router'
import Client1 from '../components/Client1'
import Client2 from '../components/Client2'

//page create kra ai phle aur us page ke andar routes define kie hain 
//aur phr routes ke andar components call krlie hain 
const app = () => {
    return (
        <div>
            <Layout title="Client-side-Route Header" text="Client-side-Route component" footerTitle="Client-side-Route Footer">
                <Router basepath="/app">
                    <Client1 path="/page1" />
                    <Client2 path="/" />
                </Router>
            </Layout>
        </div>
    )
}

export default app
