export const getRandomDarkColor = (): string => {
  const hue = Math.floor(Math.random() * 360);
  const saturation = Math.floor(Math.random() * 15) + 15; // 15-30%
  const lightness = Math.floor(Math.random() * 5) + 10; // 10-15%
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};
