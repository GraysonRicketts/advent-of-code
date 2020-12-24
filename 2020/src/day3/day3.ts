import Topology from './Topology';
import Snow from './Snow';
import Tree from './Tree';

class Field {
  constructor(private topologies: Topology[][]) {}

  public getPosition(x: number, y: number): Topology {
    return this.topologies[y][x % this.topologies[y].length];
  }

  get height() {
    return this.topologies.length;
  }
}

export interface Slope {
  x: number;
  y: number;
}

function sledRide(slope: Slope, field: Field): Topology[] {
  const run: Topology[] = [];

  for (let y = 0, x = 0; y < field.height; y += slope.y, x += slope.x) {
    const space = field.getPosition(x, y);
    run.push(space);
  }
  return run;
}

function mapCharToTopogoly(char: string) {
  return char === '.' ? new Snow() : new Tree();
}

function parseFieldInput(input: string): Topology[][] {
  const rows = input.split('\n');
  const topology = rows.map(r => {
    const topologyRow = [];
    const spaces = r.split('');
    // eslint-disable-next-line no-restricted-syntax
    for (const s of spaces) {
      topologyRow.push(mapCharToTopogoly(s));
    }

    return topologyRow;
  });

  return topology;
}

function getTreesInRun(input: string, slope: Slope): number {
  const topo = parseFieldInput(input);
  const field = new Field(topo);
  const run = sledRide(slope, field);

  return run.filter(s => s instanceof Tree).length;
}

export { parseFieldInput, Snow, Tree, Field, sledRide, getTreesInRun };
