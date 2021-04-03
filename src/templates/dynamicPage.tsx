import React from 'react'

// type pageProps = {
//     name: string,
//     age: string
// }

const dynamicPage = ({ pageContext }) => {
    return (
        <div>
            <h1>This is the dynamic page bro</h1>
            <h2>the name is coming here {pageContext.name} and the age is coming here is {pageContext.age}</h2>
        </div>
    )
}

export default dynamicPage
