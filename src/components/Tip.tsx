import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: var(--color-white-500);
  border-left: 4px solid var(--color-primary);
  padding: 1rem;
  border-radius: var(--border-radius);
`;

const Title = styled.p`
  font-family: var(--font-primary);
  font-weight: var(--font-weight-bold);
  display: inline;
  margin-right: 8px;
`;

type TipProps = {
  children: object,
  className: string,
};

const Tip = ({ children, className }: TipProps) => (
  <Wrapper className={className}>
    <Title>Tip:</Title>
    {children}
  </Wrapper>
);

export default Tip;