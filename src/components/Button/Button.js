import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export const Button = ({ text, secondary, handleClick }) => {
  return (
    <StyledButton secondary={secondary} onClick={handleClick}>
      {text}
    </StyledButton>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  secondary: PropTypes.bool,
};

const StyledButton = styled.button`
  padding: 0px 2rem;
  font-size: 1.25rem;
  background: ${(props) => (props.secondary ? "#213b55;" : "#50dcaa")};
  color: ${(props) => (props.secondary ? "#fff;" : "#172c40")};
  line-height: 3rem;
  width: auto;
  display: inline-flex;
  flex: 0 0 auto;
  border-style: none;
  white-space: nowrap;
  border-radius: 0.5rem;
  cursor: pointer;
`;
