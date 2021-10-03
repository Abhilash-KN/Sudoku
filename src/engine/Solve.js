function getSubGrid(x, y) {
  x = x - (x % 3);
  y = y - (y % 3);
  return [x, y];
}

function getAvailableMoves(grid, x, y) {
  let available = [1, 1, 1, 1, 1, 1, 1, 1, 1];
  for (let i = 0; i < 9; i++) {
    let value = grid[i][y];
    if (value !== 0) {
      available[value - 1] = 0;
    }
    value = grid[x][i];
    if (value !== 0) {
      available[value - 1] = 0;
    }
  }
  let i, j;
  [i, j] = getSubGrid(x, y);
  for (let m = i; m < i + 3; m++) {
    for (let n = j; n < j + 3; n++) {
      let value = grid[m][n];
      if (value !== 0) {
        available[value - 1] = 0;
      }
    }
  }
  let moves = [];
  for (let i = 0; i < 9; i++) {
    if (available[i]) {
      moves.push(i + 1);
    }
  }
  return moves;
}

export default function solve(grid, pos, idx) {
  if (idx > pos.length - 1) return true;
  let x, y;
  [x, y] = pos[idx];

  let moves = getAvailableMoves(grid, x, y);

  if (moves.length === 0) return false;
  moves.sort(() => Math.random() - 0.5);
  for (let i = 0; i < moves.length; i++) {
    grid[x][y] = moves[i];
    if (solve(grid, pos, idx + 1)) return true;
    grid[x][y] = 0;
  }
  return false;
}
