const path = require(`path`);

const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
  // Query for nodes to use in creating pages.
  resolve(
    graphql(request).then(result => {
      if (result.errors) {
        reject(result.errors)
      }
      
      return result;
    })
  )
});

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;

    const getItems = makeRequest(graphql, `
    {
        allStrapiItem {
            edges {
                node {
                    id
                    slug
                }
            }
        }
    }
    `).then(result => {
    // Create pages for each item
        result.data.allStrapiItem.edges.forEach(({ node }) => {
            createPage({
                path: `/item/${node.slug}`,
                component: path.resolve(`src/templates/item.js`),
                context: {
                    slug: node.slug,
                },
            })
        })
    });

    // Query for articles nodes to use in creating pages.
    return getItems;
};