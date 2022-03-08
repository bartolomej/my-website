import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";


const SEO = ({
  description,
  lang = 'en',
  path,
  title,
  banner = 'website-banner.png',
  isBlogPost = false,
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            siteUrl
            description
            author {
              birthDate
              name
            }
            social {
              twitter
            }
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const url = site.siteMetadata.siteUrl;
  const image = `${site.siteMetadata.siteUrl}/${banner}`;

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}>
      
      {/* Analytics */}
      <script async src="https://cdn.splitbee.io/sb.js"></script>

      {/* General tags */}
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      <meta name="image" content={image} />
      <meta name="author" content={site.siteMetadata.author.name} />
      <link rel="canonical" href={`${url}${path}`} />

      {/* OpenGraph tags */}
      <meta property="og:url" content={`${url}${path}`} />
      <meta property="og:title" content={`${title} | ${site.siteMetadata.title}`} />
      <meta property="og:site_name" content={site.siteMetadata.title} />
      <meta property="og:type" content={isBlogPost ? 'article' : 'website'} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:image:secure_url" content={image} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={site.siteMetadata.social.twitter} />
      <meta name="twitter:title" content={`${title} | ${site.siteMetadata.title}`} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={image} />

      {/* Structured data and google site verification */}
      <meta name="google-site-verification" content="RwRuJzajY31jPYG0gLcRsgtxLOXOJbpG833_Dcw_XWM"/>
      <script type="application/ld+json">{JSON.stringify({
        "@context": "http://schema.org",
        "@type": "CreativeWork",
        url: site.siteMetadata.siteUrl,
        name: site.siteMetadata.title,
        author: {
          name: site.siteMetadata.author.name,
          email: site.siteMetadata.email,
          birthDate: site.siteMetadata.author.birthDate
        }
      })}</script>
    </Helmet>
  );
};

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired
};

export default SEO;
