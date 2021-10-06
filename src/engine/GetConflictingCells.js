export default function getConflictingCells(grid, x, y, value) {
  let cells = [];
  for (let i = 0; i < 9; i++) {
    if (grid[i][y] === value && grid[i][y] !== 0 && i !== x) {
      cells.push([i, y]);
    }
    if (grid[x][i] === value && grid[x][i] !== 0 && i !== y) {
      cells.push([x, i]);
    }
  }
  let i = x - (x % 3);
  let j = y - (y % 3);
  for (let m = i; m < i + 3; m++) {
    for (let n = j; n < j + 3; n++) {
      if (grid[m][n] !== 0 && grid[m][n] === value && m !== x && n !== y) {
        cells.push([m, n]);
      }
    }
  }
  return cells;
}
