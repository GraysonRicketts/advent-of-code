import { getTreesInRun, Slope } from './day3';

const run = `.#..........#...#...#..#.......
.###...#.#.##..###..#...#...#..
#.....#................#...#.#.
#.....#..###.............#....#
......#.....#....#...##.....###
....#........#.#......##....#.#
..#.......##..#.#.#............
#.............#..#...#.#...#...
.#...........#.#....#..##......
......#..##..#....#....#...##..
....#.##.#####..#.##..........#
..#.#......#.#.#....#.....#....
...###.##......#..#.#...#...#..
...#..#.#..#..#.......#........
...#....#..#...........#.#.....
....#.........###.#....#...#...
....#..##.....#.##....##.#.....
........#.#.#.....#........#...
..#..#.....#.#...#.#...#.#.....
....#..........#....#....#...##
.##...#..#...##....#..#.#....#.
.#....##..#...#................
..#.###.........#.###.....#....
....#..#.......###.#...........
#...#...#.#...........#.#......
.#..#.......##.....##...#......
....####.#..#.#.#...........#..
.##...#..#..#.#....##.....#..##
...#......##....#...#.#.###....
##.#...........#.........#...#.
...........#...#...........##..
.....#....#...........#........
...#..#.........#...#....#.##..
.....##.........#...#........##
....#....#..#.#...#...##.#.....
...#.#..#...#...........#..#...
.....#.#.....#....#...#....#...
.#.............#..##..........#
..........#......#..##.....###.
..#....#........#.#.....##...#.
#..#......#.#.##......#.#.##...
.....#..#.........#...#.#.#.#.#
#.#...#.......#.#..##.##.....##
.....#......##......#.......#..
#.....#...##.#.#........#......
#..........#.#...#.......#.....
..#..#........#........#.......
...#....#....#..####.#....#...#
#.............#.....##....#..#.
##....#.....###..##....#......#
#.....#...#.#.............#....
.#.#..##..##.#..#....#.#.#...#.
.#...#..#.....#..#.#.#..#...##.
..#.#.#.#.#.#....##...#........
.......##.....#..........#...#.
...#..#...#...........#....#...
.....#..#....#..#.##...#.......
..##..#.......#.#..#....#......
...#...............#.#..#......
....#........#...#....#...#.#..
...#...#..........##....##.#...
..###.#.##.............#..#.#.#
##.......##.#..#.#.#.....#.#.#.
..#####...#......##...#........
...#.##...#................#..#
..#......#...#....#.#..##..#...
#.#.........#............#.....
##.............#.#.....#......#
....#.......#..#..##....#.#....
...#...##....#.........#..#....
...####.....#...........#....#.
#.#........##....#..#..#...#...
....#.#.###..........#........#
#.#......#.....#.##....#.#...#.
#....##.#..##..#.#.............
.#.....##..#..................#
...#.#........#...#.#........#.
..#....#......#.....##........#
....#...#....#...#.....#.##....
...#........#.......##.........
.#.##......#......#....##......
.#...#...###.#............#..#.
.#...........#.#.#....#...#..#.
.#.....#....#.....#...#........
.#..#.....#............#.#.##.#
...###.#.............#..##.....
...#.#.##.#..#..........#..#...
.#.#.#....#..#...............##
.......#.#..#...#.#.#........#.
....#.#...#..##....#........#.#
..........#...#.......#..#....#
...###.....#.#....#.....##.....
#......#..#..#........#.#...#..
#......#....#..#.#.............
...#....#........#...#..#......
...#..###........#.#.........##
#......#.#..###..#........###..
.#.#......#.#..#.#.#.#.....#..#
#....#.....#..##.....#.........
....#......#...#..#..#.#.##.#..
........#.#...#...#..#...#.#..#
.....##........#...#....#...#..
....#...##..#........#....##.#.
...............#.....#......##.
..##.....#.....#.#.............
.....#.#...........##.#.....#..
.#..##..#.##.#...##.#....#....#
.##.....#.##......#....#..#..#.
.......#.##......#....#...#.#..
.#........#......#...##.#....#.
.........#..........#.......###
#.#.........#..#..#....#...#...
.......#.........#......#.#.#..
.......#...........#....#....#.
.###...##.#.#..........#...#..#
....#.....#...#..#.............
.......##........#..#.......#..
....##..#.#....#....#..#...#..#
..#.####.....#.........#.#....#
..............#.#..#.....#...#.
.....#.............#..........#
..##.#...#.....#....#.#....##..
.#...#.......#..####..#..#...#.
#..........#................##.
......##.....#.................
..##...#.#..........##.#...#...
....#.#.#.#...##...#...#...####
.............##..#.###...#.....
#.#....#.#..#..##........#..##.
.....#.#...............#.......
...#..##......#..##...........#
#..#....#...........##..#......
.##....#.#....###.......#..#...
.....#..#.#....##...#......#...
.#.........#####......#...#...#
.......#.#.....#.....#.......#.
#....#.......###.......#..#....
#......##.###...#.......#......
.......#...#......#....#..#....
.#.####.......#...#.##.........
................##.#......#....
......##....#.#......#......#..
....##...##....#.........#.....
......#.#..............##.#...#
....#.#......#.#.............#.
.#.#..####...#................#
....#.#.#.#......##...##......#
.....#.#..#......#....#......#.
..........#.#.....#.......#...#
..##......##.#...##.#......#..#
...#............#..#...###.....
.#.#..###..#.......##...#.....#
.#....#.#.......#.....##....#..
#.............###...##.#.#...#.
#........#.#........#.#...#.#.#
##..#.................#....#...
...#.#...#..#.#..##....#...#...
#.....#.......#..............#.
.......###...##..#.....#.......
#.#.........#..#.#.........#...
.#.#............#.....##.....#.
........#....#....#.......#....
...#.#....#..#.##....#.#......#
.#.....#.#..#...........#.#.#..
#......#..#......##.#.#.#.#..#.
.......#.#..#......#.#.#..#.#.#
..........#...#..........#.##..
.#.#..####.......#..........#..
......#.#.....#..#..#..#.....#.
.....##..#.#.#..#..#...#.....##
............#.#....#.#....#....
..............#..#...#...#.....
.....#......#.......#.....#....
..##....#..#...........#..##...
###...#.##..#.#...####....###..
..#.#.....#.........#....#..###
##...........##.............#..
....##..............#.........#
...#...##....#.#..#...##.....#.
..#..##...#.......#..#..#.....#
...#...#....####........##.#...
....#........#..#.#.........#..
.#..........#...#..#.#.#......#
....#.#.....#.........#....#...
...#....#...##.......#...#.....
....#..#.......#.##.##.##...#..
##....##........#........##....
.#.#..#...........#.....#...#..
...#.##...##..#...#...##.......
.....#..###................#.#.
...#........##.#....##.....#.##
...#...#..##...#...#.#...#.....
.#......#...#..#.##.......#...#
.....#.......###.##...#........
#.....#..#........##.##.#.##..#
....#..............##.##...#...
#..........#..................#
..##.......#..........#..#..##.
.#....###.#..#.........###....#
.#....#.##..............#.##.##
.#.##.#....#.......#.#......#..
.#............#.#.....#........
..#......#.......#.............
#.#...#........##...#.#......#.
....#.........#........##..#...
..........##.....#.#......#....
.##.#..#....#.......#...#...##.
.#................#...#.##.....
....###.......#..#..#.........#
.#.....#..##...###......#.....#
.#.##..........#..#..#........#
.......#.##..............#...##
#...#.#.#.......#..#......#.##.
.#....#.#......#...#..........#
.....#........##....#.##.....#.
.#....................#..#.#.#.
.....#.........#....#.......#.#
.....#.#..##..#.....#..#.......
...#..#..#...#.....#....#....#.
#.....#.#.#..........#..#.#.#..
.....##..##.....#.#..#.........
#.#..##....##......##...#.##..#
..##..#.....#..#..........##...
......#.#...#..#.......##.....#
..#.#.......#.#......#.........
.....#........##..#.....####.#.
.#.....#........#.......#..##..
......#...#....#.##...#.......#
..##..................#..#.....
.....###.#..##...#.............
...##...##...#......#....#....#
#........#.#..........##..#....
#........#....#..........#...#.
...##.#.##..#...##......#......
#........##....#.#..##.....#..#
...####......#..#......#.#.....
.#......#...#...#.#.....##....#
.....###..##..#...#..........##
##.##....#...#.................
...##.#.......#.###......#..#..
.....#.#.#.......#.......#..#.#
#...#...#.##..#....###.......#.
.#.#..##.....#....#...##.......
.....#..........#....#...#.##..
..........#....#...#...........
.#....#..#...#...#.......#....#
#..#..............#.....####.##
.......#....###....#....#.#.#..
###.#........##.#.......#......
#..#...#..#......#.............
#...###..#...#..#..##.#.###.#..
..#..#...##......##............
.#..#.......#..###..##...#.....
....#..#..##.#.#.....##...#.#.#
....#....#.....#..#....#.......
..##..#....#.#...##..#.........
.....#....#...........#.#......
...#........#.#..#..#......#..#
.#...##....#....#.#.##......#.#
..#...........#..###.##.....#..
.#.######.#..##.......#..#.....
.....#..#......##.#.#...#......
....#....#..#.....#.......#.#.#
.....#........##.....#.....#.##
........#....#...#...#.#.#...#.
...#.#.....#...........#.....#.
#.#.#...###......#.....#.....#.
.#..........#.....#.......##...
#................#.#.....#.####
.#......#......#.#..##.#.##....
..........#....#...........###.
.##....#..####..#####..........
##.......##............#.....#.
...#.....#...#....#.......#....
.#....##......#.#...#....#.....
....#............##..........#.
.#....#....#.....#.#...........
.............##.#.##...#.#.#...
..#............#.#..##.#....##.
#.....#...##..........#.#.#...#
......#............#..........#
..##..#.....#........#.##..#..#
#..#.#..##.#.....##.#..........
#..#...#.#..#......##.......##.
.##......#...........##.....#..
...#.....#.....#..#....#.......
.....#...............#........#
.......#.....##..#..##..#.#.#..
#.#.....#..#..........##...#...
#..#......#.................#.#
.##...#....#...#...#.......#...
.#........##........#..........
........#..........#.........#.
.....#.##..#.......#........#..
..##..#..#...##..#.#....#......
......#........#.##.....#.#....
.#...#.#.........#..#.#.#.#..#.
.#..#.#...#............#.#..#..
....#.................#...#..##
.........##.....#.#.#......####
...............#....##.#.#.....
....##..#....#......#....#.....
....##.#...#....#.#..#...#..#..
..##......#.#..#........#.#.#..
.........#.#................##.
##.....#.....##..##.#........#.
###....#..#..#..#..#.##..##.#..
.....##..#...........##..#.#...
....#..#..#..#....#...#.#....#.
#....#............#..#....###..
....#..#.............#....##.#.
...#.................#...#.....
.##...#....#..#..#........#....
...#.#..#...#.#......#....#....
...#.......##..........#...#.#.
...##..#.......#........#...#..
.....#.#.#....#..##......##...#
....##......#........##....##..
..#..........#.#.##.....#......
..................#..#..#..###.
.#..............#.#..#.#..#.###
..#....#....#......#..##..#...#
#.........#..#..#...........#..
`;

function main() {
  /* eslint-disable no-console */
  console.log('Part 1:');
  console.log(getTreesInRun(run, { x: 3, y: 1 }));

  console.log('Part 2:');
  const slopes: Slope[] = [
    { x: 1, y: 1 },
    { x: 3, y: 1 },
    { x: 5, y: 1 },
    { x: 7, y: 1 },
    { x: 1, y: 2 },
  ];
  const treePerRun = slopes.map(s => getTreesInRun(run, s));
  const output = treePerRun.reduce((prev, curr) => prev * curr);
  console.log(treePerRun);
  console.log(output);
}

export default main;
