import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import styled from "@emotion/styled";

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <Article key={node.fields.slug}>
            <header>
              <Title>
                <Link to={node.fields.slug}>
                  {title}
                </Link>
              </Title>
              <small>{node.frontmatter.date}</small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
          </Article>
        )
      })}
    </Layout>
  )
}

const Article = styled.article`
  margin: 0 auto;
  position: relative;
  max-width: ${rhythm(26)};
  padding: ${rhythm(0.2)} ${rhythm(3 / 4)};
`;

const Title = styled.h3`
  margin-bottom: ${rhythm(1 / 4)};
`;

export default BlogIndex

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
