/* eslint-disable no-console */
import input from './input';
import {
  determineSeatId, determineRow, determineColumn, parseInput,
} from './parser';

function calculateHighSeatId(str: string) : number {
  const passes = str.split('\n');
  let max = -1;

  for (let pos = 0; pos < passes.length; pos += 1) {
    const pass = passes[pos];
    const parsedPass = parseInput(pass);
    const col = determineColumn(parsedPass.column);
    const row = determineRow(parsedPass.row);
    const seatId = determineSeatId(row, col);

    if (seatId > max) {
      max = seatId;
    }
  }

  return max;
}

function determineSeat(str: string): number {
  const passes = str.split('\n');

  const ids = passes.map((p) => {
    const parsedPass = parseInput(p);
    const col = determineColumn(parsedPass.column);
    const row = determineRow(parsedPass.row);
    return determineSeatId(row, col);
  }).sort((a, b) => a - b);

  for (let pos = 1; pos < ids.length - 1; pos += 1) {
    if (ids[pos + 1] - ids[pos - 1] === 3) {
      return ids[pos] + 1;
    }
  }

  return -1;
}

function main() {
  console.log(`Part 1:\n${calculateHighSeatId(input)}`);
  console.log(`Part 2:\n${determineSeat(input)}`);
}

export { main, calculateHighSeatId };
