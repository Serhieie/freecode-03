export function generateRandomColor(): string {
  const red = Math.floor(Math.random() * 80 + 120);
  const green = Math.floor(Math.random() * 80 + 120);
  const blue = Math.floor(Math.random() * 80 + 120);

  return `rgb(${red}, ${green}, ${blue})`;
}
