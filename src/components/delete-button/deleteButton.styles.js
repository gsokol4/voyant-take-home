import styled from "styled-components";
import { devices } from "../../theme-and-global-styles/screenSizes.js";

export const StyledDeleteButton = styled.button`
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  background: transparent;

  position: absolute;
  right: 5px;
  top: 5px;
  width: 30px;
  height: 30px;
  border-radius: 4px;
  :hover {
    background: red;
    border: solid 2px black;
  }
  :before,
  :after {
    position: absolute;
    top: 3px;
    left: 12px;
    content: " ";
    height: 20px;
    width: 2px;
    background-color: #333;
  }
  :before {
    transform: rotate(45deg);
  }
  :after {
    transform: rotate(-45deg);
  }

  @keyframes example {
    0% {
      transform: rotate(45deg);
    }
    100% {
      transform: rotate(-45deg);
    }
  }

  &:hover:before {
    animation-name: example;
    animation-duration: 0.25s;
  }
  &:hover:after {
    animation-name: example;
    animation-duration: 0.25s;
    animation-direction: reverse;
  }

  .search_form {
    display: flex;
  }

  @media ${devices.mobile} {
  }
  @media ${devices.tablet} {
  }
  @media ${devices.laptop} {
  }
  @media${devices.desktop} {
  }
`;
