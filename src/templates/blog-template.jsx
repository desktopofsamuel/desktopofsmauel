import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import Boxed from "elements/Boxed";
import styled from "styled-components";
import Layout from "../layout";
import config from "../../data/SiteConfig";
import SEO from "../components/SEO";
import PostTemplate from "../components/PostTemplate";
import Related from "../components/Related";
import TableOfContent from "../components/TableOfContent";

const Container = styled(Boxed)`
  max-width: var(--page-container-s);
`;

const BlogPostTemplate = ({ data, pageContext }) => {
  const postNode = data.blog;
  const postToc = data.blog.tableOfContents;
  const post = postNode.frontmatter;
  const prev = pageContext.prev
    ? {
        path: `${pageContext.prev.frontmatter.path}`,
        title: pageContext.prev.frontmatter.title,
        excerpt: pageContext.prev.frontmatter.tldr,
      }
    : null;

  return (
    <Layout>
      <Helmet>
        <title>{`${post.title} | ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postPath={pageContext.slug} postNode={postNode} postSEO />
      <Container>
        <PostTemplate postNode={postNode} />
        <TableOfContent post={postToc} />
      </Container>
      {prev && <Related node={prev} />}
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogBySlug($id: String) {
    blog: mdx(id: { eq: $id }) {
      id
      body
      excerpt
      tableOfContents
      frontmatter {
        path
        title
        tldr
        cover {
          publicURL
          size
          childImageSharp {
            sizes(maxWidth: 1140) {
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
              originalImg
              originalName
            }
          }
        }
        date
        category
        tags
      }
      fields {
        slug
        date(formatString: "MMM DD, YYYY", locale: "en")
      }
    }
  }
`;
