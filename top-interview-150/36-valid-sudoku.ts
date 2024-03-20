const VALID_ITEMS = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
const INDICES = Array.from({ length: 9 }, (_, index) => index);
const BOX_INDICES = [0, 1, 2].flatMap(i => [[i, 0], [i, 1], [i, 2]]);

const OBSERVED_ITEMS = new Set<string>();

function validateCell(item: string): boolean {
  return VALID_ITEMS.find(validItem => item === validItem) !== undefined;
}

function validateNoDuplicity(item: string): boolean {
  if (item === '.') {
    return true;
  }
  // if (!validateCell(item)) {
  //   return false;
  // }
  if (!OBSERVED_ITEMS.has(item)) {
    OBSERVED_ITEMS.add(item);
    return true;
  }
  return false;
}

function validateNoDuplicityForCollection(items: string[]): boolean {
  for (const item of items) {
    if (!validateNoDuplicity(item)) {
      return false;
    }
  }
  return true;
}

function validateRow(board: string[][], index: number): boolean {
  OBSERVED_ITEMS.clear();
  return validateNoDuplicityForCollection(board[index]);
}

function validateColumn(board: string[][], index: number): boolean {
  OBSERVED_ITEMS.clear();
  return validateNoDuplicityForCollection(INDICES.map(i => board[i][index]));
}

function validateBox(board: string[][], row: number, column: number): boolean {
  OBSERVED_ITEMS.clear();
  var rowStart = row * 3;
  var columnStart = column * 3;
  for (const [row, column] of BOX_INDICES) {
    if (!validateNoDuplicity(board[rowStart + row][columnStart + column])) {
      return false;
    }
  }
  return true;
}

function isValidSudoku(board: string[][]): boolean {
  for (const [row, column] of BOX_INDICES) {
    if (!validateBox(board, row, column)) {
      return false;
    }
  }
  for (const index of INDICES) {
    if (!validateRow(board, index)) {
      return false;
    }
    if (!validateColumn(board, index)) {
      return false;
    }
  }
  return true;
};
