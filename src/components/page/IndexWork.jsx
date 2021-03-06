import React from "react";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import Zoom from "react-reveal/Zoom";
import PropTypes from "prop-types";
import Link from "../common/GatsbyLink";

const Card = styled.div`
  height: 100%;
  background-color: ${props => (props.color ? `${props.color}` : "black")};
  padding: var(--var-padding-m);
  /* margin-bottom: var(--padding-m); */
  transition: var(--transition);
  border-radius: 8px;
  content-visibility: auto;

  &:hover {
    transform: scale(1.01, 1.01);
    box-shadow: 0 25px 40px 0 rgba(0, 0, 0, 0.08);
  }
`;

const Subtitle = styled.h6`
  color: var(--color-white-light-300);
  font-weight: 400;
  letter-spacing: 1.5px;
  margin: 0;
`;

const Title = styled.h3`
  margin-top: 16px;
  color: var(--color-white-light-300);
`;

const Image = styled(GatsbyImage)`
  background-color: rgba(0, 0, 0, 0);
`;

class IndexWork extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead,
        color: postEdge.node.frontmatter.color,
        subtitle: postEdge.node.frontmatter.subtitle,
        projectTitle: postEdge.node.frontmatter.projectTitle,
        shortTitle: postEdge.node.frontmatter.shortTitle,
        smallTitle: postEdge.node.frontmatter.smallTitle,
      });
    });
    return postList;
  }
  render() {
    const postList = this.getPostList();
    const { detail } = this.props;
    return (
      <>
        {postList.map(post => (
          <Zoom key={post.title}>
            <Link to={`/work${post.path}`} className="noeffect">
              <Card key={post.path} color={post.color}>
                <Subtitle>
                  {detail ? post.smallTitle : post.projectTitle}
                </Subtitle>
                <Title>
                  {detail
                    ? `${post.projectTitle} — ${post.shortTitle}`
                    : post.shortTitle}
                </Title>
                <Image
                  image={post.cover.childImageSharp.gatsbyImageData}
                  alt={post.title}
                  fadeIn
                />
              </Card>
            </Link>
          </Zoom>
        ))}
      </>
    );
  }
}
export default IndexWork;

IndexWork.propTypes = {
  detail: PropTypes.bool,
};

IndexWork.defaultProps = {
  detail: false,
};
