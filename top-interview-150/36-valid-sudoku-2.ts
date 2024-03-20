const BOARD_INDICES = Array.from({ length: 9 }, (_, index) => index);

function isValidSudoku(board: string[][]): boolean {
  let target: string | undefined;
  let targetI: number | undefined;
  let targetJ: number | undefined;
  let targetBoxI: number | undefined;
  let targetBoxJ: number | undefined;
  for (const i of BOARD_INDICES) {
    for (const j of BOARD_INDICES) {
      target = board[i][j];
      if (target === '.') {
        continue;
      }
      targetI = i;
      targetJ = j;
      for (const k of BOARD_INDICES) {
        if (k !== targetI && board[k][j] === target) {
          return false;
        }
      }
      for (const l of BOARD_INDICES) {
        if (l !== targetJ && board[i][l] === target) {
          return false;
        }
      }

      targetBoxI = Math.floor(targetI / 3);
      targetBoxJ = Math.floor(targetJ / 3);
      for (const m of BOARD_INDICES) {
        for (const n of BOARD_INDICES) {
          if (Math.floor(m / 3) == targetBoxI && Math.floor(n / 3) == targetBoxJ && m != targetI && n != targetJ && target === board[m][n]) {
            return false;
          }
        }
      }
    }
  }
  return true;
};
