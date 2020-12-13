import { expect } from 'chai';

abstract class Topology {
  abstract isOpen(): boolean;
}

class Tree extends Topology {
  isOpen(): boolean {
    return false;
  }
}

class Snow extends Topology {
  isOpen(): boolean {
    return true;
  }
}

class Field {

  constructor(private topologies: Topology[][]) { }
}

function mapCharToTopogoly(char: string) {
  return char === '.' ? new Snow() : new Tree();
}

function parseFieldInput(input: string): Topology[][] {
  let topology = [];
  const rows = input.split('\n');
  for (const r of rows) {
    const topologyRow = [];
    const spaces = r.split('');
    for (const s of spaces) {
      topologyRow.push(mapCharToTopogoly(s));
    }

    topology.push(topologyRow);
  }
  return topology;
}

describe('day 3', () => {
  it('Should parse the field input', () => {
    const field = '..##' +
      '\n#...' +
      '\n..##';

    const expected = [[new Snow(), new Snow(), new Tree(), new Tree()], [
      new Tree(), new Snow(), new Snow(), new Snow()
    ], [new Snow(), new Snow(), new Tree(), new Tree()]]
    const output = parseFieldInput(field);
    expect(output).to.deep.equal(expected);
    expect(output[0][0]).to.be.instanceOf(Snow)
    expect(output[0][1]).to.be.instanceOf(Snow)
    expect(output[0][2]).to.be.instanceOf(Tree)
    expect(output[0][3]).to.be.instanceOf(Tree)
  })

  // input:
  // 1) field
  //    1) row()
  //    2) Tree, Open
  // 2) slope

  // output:
  // 1) number of trees encountered

  // high-level plan:
  // 1) parse input
  // 2) turn input into evolvable structure
  // 3) determine if space is open in field
  // 4) calculate run
})