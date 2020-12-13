import { expect } from 'chai';
import { parseFieldInput, Snow, Tree, Field, sledRide, getTreesInRun } from '../../src/day3/day3';


describe('day 3', () => {
  describe('parseFieldInput', () => {
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
  })

  describe('Field', () => {
    let field: Field;
    beforeEach(() => {
      field = new Field([[new Snow(), new Snow(), new Tree(), new Tree()], [
        new Tree(), new Snow(), new Snow(), new Snow()
      ], [new Snow(), new Snow(), new Tree(), new Tree()]]);
    })

    describe('isPositionOpen', () => {
      it('Should return true if spot is Snow', () => {
        const isOpen = field.getPosition(0, 0);
        expect(isOpen).to.be.instanceOf(Snow);
      })

      it('Should return false if spot is Tree', () => {
        const isOpen = field.getPosition(2, 0);
        expect(isOpen).to.be.instanceOf(Tree);
      })

      it('Should get space further right', () => {
        const isOpen = field.getPosition(16, 1);
        expect(isOpen).to.be.instanceOf(Tree);
      })
    })
  })

  describe('sledRide', () => {
    let field: Field;

    beforeEach(() => {
      field = new Field([
        [new Snow(), new Snow(), new Tree(), new Tree()],
        [new Tree(), new Snow(), new Snow(), new Snow()],
        [new Snow(), new Snow(), new Tree(), new Tree()]])
    })

    it('Should get simple ride', () => {
      const output = sledRide({ x: 0, y: 1 }, field);
      expect(output[0]).to.be.instanceOf(Snow);
      expect(output[1]).to.be.instanceOf(Tree);
      expect(output[2]).to.be.instanceOf(Snow);
    })

    it('Should get complex ride', () => {
      const output = sledRide({ x: 3, y: 1 }, field);
      expect(output[0]).to.be.instanceOf(Snow);
      expect(output[1]).to.be.instanceOf(Snow);
      expect(output[2]).to.be.instanceOf(Tree);
    })
  })

  describe('getTreesInRun', () => {
    const run = `..##.......
#...#...#..
.#....#..#.
..#.#...#.#
.#...##..#.
..#.##.....
.#.#.#....#
.#........#
#.##...#...
#...##....#
.#..#...#.#`;
    it('Should count the trees in a run', () => {
      const output = getTreesInRun(run, { x: 1, y: 1 })
      expect(output).to.eql(2);
    })
    it('Should count the trees in a run', () => {
      const output = getTreesInRun(run, { x: 3, y: 1 })
      expect(output).to.eql(7);
    })
    it('Should count the trees in a run', () => {
      const output = getTreesInRun(run, { x: 5, y: 1 })
      expect(output).to.eql(3);
    })
    it('Should count the trees in a run', () => {
      const output = getTreesInRun(run, { x: 7, y: 1 })
      expect(output).to.eql(4);
    })
    it('Should count the trees in a run', () => {
      const output = getTreesInRun(run, { x: 1, y: 2 })
      expect(output).to.eql(2);
    })
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