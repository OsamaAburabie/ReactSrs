import styled from "styled-components";

const Button = styled.button`
  appearance: none;
  background: #333;
  color: #fff;
  padding: 0.25em 0.5em;
  border: 1px solid white;
  transition: 0.2s;

  ${(props) => {
    switch (props.size) {
      case "sm":
        return "font-size: 12px;";
      case "md":
        return "font-size: 16px;";
      case "lg":
        return "font-size: 24px;";

      default:
        return "font-size: 16px;";
    }
  }}

  ${(props) => {
    if (props.block) {
      return `
          display: block;
          width:100%;
          
          `;
    }
  }}

  :hover {
    background: #fff;
    color: #333;
  }
`;
export default Button;
