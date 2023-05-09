import React from "react";
import { StyledProfileImage } from "./profileImage.styles.js";

function ProfileImage({ url }) {
  return (
    <StyledProfileImage>
      <img className="profile_image" src={url} alt="profile"></img>
    </StyledProfileImage>
  );
}

export default ProfileImage;
