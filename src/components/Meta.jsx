import React from "react";
import styled from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileAlt,
  faMobile,
  faBullhorn,
  faCalendarAlt,
  faMugHot,
} from "@fortawesome/free-solid-svg-icons";

library.add(faMobileAlt, faMobile, faMugHot, faBullhorn, faCalendarAlt);

const Head = styled.div`
  display: flex;
  flex-direction: row;
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 14px;
  color: var(--color-primary-shades-300);
  margin-right: 8px;
  margin-top: 4px;
`;

const Label = styled.p`
  font-family: var(--font-primary);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary-shades-300);
  letter-spacing: 0.12em;
  font-size: 14px;
  text-transform: uppercase;
  margin: 0;
`;

const Value = styled.p`
  color: var(--color-text);
  margin: 0;
  margin-bottom: var(--padding-s);
`;

const Meta = ({ icon, label, value }) => {
  return (
    <div>
      <Head>
        <Icon icon={["fas", icon]} title={label} />
        <Label>{label}</Label>
      </Head>
      <Value>{value}</Value>
    </div>
  );
};

export default Meta;
