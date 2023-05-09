import styled from "styled-components";
import { devices } from "../../theme-and-global-styles/screenSizes.js";

export const StyledProfileImage = styled.div`
  margin: 5px;
  border-radius: 100px;
  .profile_image {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 100px;
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
