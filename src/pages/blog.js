import React from "react";
import { graphql, Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { rhythm } from "../utils/typography";
import styled from "@emotion/styled";


const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMdx.edges;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        path={location.pathname}
        banner="blog-banner.png"
        title="My Blog"
        description="These are my blog posts in the making."
      />
      <h1>My Blog</h1>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug;
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
                  __html: node.frontmatter.description || node.excerpt
                }}
              />
            </section>
          </Article>
        );
      })}
    </Layout>
  );
};

const Article = styled.article`
  margin: 0 auto;
  position: relative;
  max-width: ${rhythm(26)};
`;

const Title = styled.h3`
  margin-bottom: ${rhythm(1 / 4)};
  a {
    color: rgb(var(--color-heading));
  }
`;

export default BlogIndex;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
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
`;
