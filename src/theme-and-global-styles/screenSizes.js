const sizes = {
  phone: "480px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "1200px",
};

export const devices = {
  mobile: `(min-width: ${sizes.phone})`,
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  desktop: `(min-width: ${sizes.desktop})`,
};
