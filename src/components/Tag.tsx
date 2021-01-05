import React from "react";
import styled from "styled-components";
import Link from "components/common/GatsbyLink";
import kebabCase from "lodash/kebabCase";

const StyledLink = styled(Link)`
  display: inline-block;
  flex-direction: column;
  padding: 0.3rem 0.75rem;
  border: 1px solid var(--color-primary);
  border-radius: var(--border-radius);
  margin: 0 1rem 0.5rem 0;
  transition: var(--transition);

  color: var(--color-primary);
  font-size: var(--font-size-2xs);

  span {
    opacity: 0.5;
    margin-right: 4px;
  }

  &:hover {
    background: var(--color-primary);
    color: var(--color-white);
    border: 1px solid var(--color-transparent);
  }
`;

type TagProps = {
  children: object,
  className?: string,
  tag: string,
};

const Tag = ({ children, className, tag }: TagProps) => (
  <StyledLink className={className} to={`/tags/${kebabCase(tag)}`}>
    <span>#</span>
    {children}
  </StyledLink>
);

export default Tag;