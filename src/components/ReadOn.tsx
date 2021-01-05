import React from "react";
import styled from "styled-components";
import GatsbyLink from "./common/GatsbyLink";

const Button = styled.div`
  padding: 0.5rem var(--var-padding-s);
  text-transform: uppercase;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  transition: var(--transition);
  border: 1px var(--color-primary-shades-200) solid;
  border-radius: 36px;

  p {
    color: var(--color-primary-shades-300);
    font-family: var(--font-primary);
    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-2xs);
    letter-spacing: 0.075rem;
    margin-bottom: 0;
    margin-right: 8px;
    transition: var(--transition);

    &:active {
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
  }

  span {
    font-size: var(--font-size-m);
    line-height: 0;
    margin-top: -4px;
  }

  & {
    position: relative;
    z-index: 1;
    display: inline-flex;
    transition: var(--transition);
    padding: 16px 24px;
  }

  &:hover {
    & {
      border-color: var(--color-primary-shades-300);
    }

    p {
      margin-right: 16px;
    }
  }
`;

type ButtonReadOnProps = {
  href: string,
  text: string,
  target: "_blank" | "_self",
};

const defaultProps: ButtonReadOnProps = {
  text: "Read On",
  target: "_self",
  href: "",
};

const ReadOn: React.FC<ButtonReadOnProps> = ({
  href,
  text,
  target,
}: ButtonReadOnProps) => (
  <GatsbyLink to={href} target={target} className="noeffect">
    <Button>
      <p>{text}</p>
      <span>→</span>
    </Button>
  </GatsbyLink>
);

ReadOn.defaultProps = defaultProps;

export default ReadOn;