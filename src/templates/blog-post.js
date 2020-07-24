import React from "react";
import { graphql, Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { rhythm, scale } from "../utils/typography";
import styled from "@emotion/styled";
import { MDXRenderer } from "gatsby-plugin-mdx";
import "katex/dist/katex.min.css";


const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.mdx;
  const siteTitle = data.site.siteMetadata.title;
  const { previous, next } = pageContext;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        banner={post.frontmatter.banner || 'website-banner.png'}
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Wrapper>
        <article>
          <header>
            <h1
              style={{
                marginTop: rhythm(1),
                marginBottom: 0
              }}
            >
              {post.frontmatter.title}
            </h1>
            <p
              style={{
                ...scale(-1 / 5),
                display: `block`,
                marginBottom: rhythm(1)
              }}
            >
              {post.frontmatter.date}
            </p>
          </header>
          <MDXRenderer>{post.body}</MDXRenderer>
          <hr
            style={{
              marginBottom: rhythm(1)
            }}
          />
        </article>

        <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.article`
  margin: 0 auto;
  max-width: ${rhythm(26)};
  & pre {
    background: rgb(var(--color-codeBlock));
    color: white;
    padding: 10px;
    border-radius: 8px;
    overflow-x: scroll;
  }
`;

export default BlogPostTemplate;

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`;
