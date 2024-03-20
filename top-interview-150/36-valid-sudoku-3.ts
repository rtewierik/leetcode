const setMaker = () => {
  const s = new Set()
  return {
    addOnlyNotExisted: (item: string) => {
      if (s.has(item)) {
        return false
      }
      s.add(item)
      return true
    },
  }
}

function isValidSudoku(board: string[][]) {
  const seen = setMaker()

  for (let row = 0; row < 9; row++) {
    for (let column = 0; column < 9; column++) {
      const char = board[row][column]
      if (char === '.') {
        continue
      }
      if (
        !seen.addOnlyNotExisted(char + '@row' + row) ||
        !seen.addOnlyNotExisted(char + '@col' + column) ||
        !seen.addOnlyNotExisted(
          char + '@box' + Math.floor(row / 3) + Math.floor(column / 3)
        )
      ) {
        return false
      }
    }
  }

  return true
}