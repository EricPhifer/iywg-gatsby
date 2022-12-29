const indexName = `Pages`

const pageQuery = `{
  pages: allMarkdownRemark(
    allSanityPost {
      edges {
        node {
          id
          title
          slug {
            current
          }
          _rawBody
          _rawCategories
        }
      }
    }
  }`

function pageToAlgoliaRecord({ node: { id, frontmatter, fields, ...rest } }) {
  return {
    objectID: id,
    ...frontmatter,
    ...fields,
    ...rest,
  }
}

const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => data.pages.edges.map(pageToAlgoliaRecord),
    indexName,
    settings: { attributesToSnippet: [`excerpt:20`] },
  },
]

module.exports = queries