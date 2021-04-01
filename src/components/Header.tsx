import React from 'react'

type HeaderProps = {
    title: string,
    text?: string
}

const Header = ({ title, text }: HeaderProps) => {
    return (
        <div>
            {title}
            <br />
            {text}
        </div>
    )
}

export default Header
