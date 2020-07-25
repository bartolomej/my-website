import React from "react";
import { graphql, Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { rhythm } from "../utils/typography";
import styled from "@emotion/styled";
import { MDXRenderer } from "gatsby-plugin-mdx";


const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.mdx;
  const siteTitle = data.site.siteMetadata.title;
  const { previous, next } = pageContext;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        isBlogPost={true}
        banner={post.frontmatter.banner || "website-banner.png"}
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Wrapper>
        <Article>
          <Header>
            <h1>{post.frontmatter.title}</h1>
            <p>{post.frontmatter.date}</p>
            <img
              alt="Blog post banner image"
              src={`/${post.frontmatter.banner}`}
            />
          </Header>
          <MDXRenderer>{post.body}</MDXRenderer>
          <hr/>
        </Article>

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

const Header = styled.header`
  margin-bottom: 80px;
  text-align: center;
  & h1 {
    margin-bottom: 20px;
  }
  & img {
    border-radius: 8px;
  }
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${rhythm(26)};
`;

const Article = styled.article`
  backdrop-filter: blur(4px);
  & hr {
     margin-bottom: 10px;
  }
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
        banner
      }
    }
  }
`;
