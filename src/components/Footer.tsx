import React from 'react'

type FooterProps = {
    footerTitle: string
}

const Footer = ({ footerTitle }: FooterProps) => {
    return (
        <div>
            {footerTitle}
        </div>
    )
}

export default Footer
