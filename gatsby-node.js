const path = require('path');

exports.createPages = async ({graphql, actions}) => {
    const { createPage } = actions
    const result = await graphql(`
            query {
                posts: allSanityPost {
                    nodes {
                        id
                        title
                        slug {
                            current
                        }
                    }
                }
            }
        `)

    result.data.posts.nodes.forEach((node) => {
        createPage({
            path: `/posts/${node.slug.current}`,
            component: path.resolve('./src/templates/Post.js'),
            ownerNodeId: node.id,
            context: {
                id: node.id,
                name: node.title,
                slug: node.slug.current,
            }
        })
    });
}