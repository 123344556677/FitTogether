export const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const getColorPalette = (index, parentColors, childColors) => {
  const parentColor = parentColors[index % parentColors.length];
  const childColor = childColors[index % childColors.length];
  return { parentColor, childColor };
};

export const truncateText = (text, maxLength) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

export const getInitials = (name) => {
  // Split the name into words
  const nameArray = name.split(" ");
  // Extract the first letter of the first word
  const firstNameInitial = nameArray[0].charAt(0).toUpperCase();
  // Return the first letter of the first name
  return firstNameInitial;
};
