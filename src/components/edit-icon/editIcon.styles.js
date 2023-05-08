import styled from "styled-components";
import { devices } from "../../theme-and-global-styles/screenSizes.js";

export const StyledIcon = styled.div`
  width: 16px;
  height: 20px;
  object-fit: cover;
  :hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
    background: white;
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
