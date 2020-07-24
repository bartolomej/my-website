import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";


const SEO = ({ description, lang, meta, title, banner = 'website-banner.png' }) => {
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

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          property: `og:image`,
          content: `${site.siteMetadata.siteUrl}/${banner}`
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.social.twitter
        },
        {
          name: `twitter:title`,
          content: title
        },
        {
          name: `twitter:image`,
          content: `${site.siteMetadata.siteUrl}/${banner}`
        },
        {
          name: `twitter:description`,
          content: metaDescription
        }
      ].concat(meta)}
    >
      <meta name="google-site-verification" content="RwRuJzajY31jPYG0gLcRsgtxLOXOJbpG833_Dcw_XWM"/>
      <script type="application/ld+json">{JSON.stringify({
        "@context": site.siteMetadata.siteUrl,
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
