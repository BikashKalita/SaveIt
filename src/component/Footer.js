import React from "react";
import styled from "styled-components";
const Footer = () => {
  return (
    <StyledFooter>
      <p>SaveIt - A Local Text Saver</p>
    </StyledFooter>
  );
};
const StyledFooter = styled.div`
  background: ${(props) => props.theme.textArea};
  color: ${(props) => props.theme.color};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 25px;
  @media screen and (max-width: 768px) {
    visibility: hidden;
  }
`;
export default Footer;
