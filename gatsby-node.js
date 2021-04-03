
exports.createPages = async ({ actions }) => {

    actions.createPage({
        path: "dynamicPage",
        component: require.resolve(`./src/templates/dynamicPage.tsx`),
        context: {
            //yahan jo bhi data bhejeinge wo destructure krskte hain component mein
            name: "AZ --",
            age: "19"
        }
    });
    console.log("End of Gatsby Node file");
}

exports.onCreatePage = async ({ page, actions }) => {
    const { createPage } = actions

    // Only update the `/app` page.
    if (page.path.match(/^\/app/)) {
        // page.matchPath is a special key that's used for matching pages
        // with corresponding routes only on the client.
        page.matchPath = "/app/*"

        // Update the page.
        createPage(page)
    }
}