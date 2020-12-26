/* eslint-disable no-bitwise */
function determineSeatId(row: number, col: number): number {
  return row * 8 + col;
}

function bitConvertor(str: string, upper: string): number {
  let number = 0;
  for (let pos = 0; pos < str.length; pos += 1) {
    number |= (str[pos] === upper ? 1 : 0);

    if (pos !== str.length - 1) {
      number <<= 1;
    }
  }
  return number;
}

function determineRow(letters: string): number {
  return bitConvertor(letters, 'B');
}

function determineColumn(letters: string): number {
  return bitConvertor(letters, 'R');
}

interface Seat {
  row: string;
  column: string;
}
function parseInput(input: string): Seat {
  return {
    row: input.slice(0, 7),
    column: input.slice(7),
  };
}

export {
  determineSeatId, determineColumn, determineRow, parseInput,
};
