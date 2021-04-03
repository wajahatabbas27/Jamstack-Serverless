
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