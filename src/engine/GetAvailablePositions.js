export default function getAvailablePositions(grid) {
  let positions = [];
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (grid[i][j] === 0) {
        positions.push([i, j]);
      }
    }
  }
  return positions;
}
