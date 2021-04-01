import React, { ReactNode } from 'react'
import Footer from './Footer'
import Header from './Header'

type LayoutProps = {
    children: ReactNode,
    title: string,
    text: string,
    footerTitle: string
}

const Layout = ({ children, title, text, footerTitle }: LayoutProps) => {
    return (
        <div>
            <Header title={title} text={text} />
            <br />
            <br />
            {children}
            <br />
            <br />
            <Footer footerTitle={footerTitle} />
        </div>
    )
}


export default Layout
