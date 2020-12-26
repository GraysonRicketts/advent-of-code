import { expect } from 'chai';
import {
  determineColumn, determineRow, determineSeatId, parseInput,
} from '../../src/day5/parser';

describe('day 5 parser', () => {
  describe('#determineRow', () => {
    it('should determine row', () => {
      expect(determineRow('BFFFBBF')).to.eql(70);
      expect(determineRow('FFFBBBF')).to.eql(14);
      expect(determineRow('BBFFBBF')).to.eql(102);
    });
  });

  describe('#determineColumn', () => {
    it('should determine column', () => {
      expect(determineColumn('RRR')).to.eql(7);
      expect(determineColumn('RLL')).to.eql(4);
    });
  });

  describe('#determineSeatId', () => {
    it('should calculate seat id', () => {
      expect(determineSeatId(70, 7)).to.eql(567);
      expect(determineSeatId(14, 7)).to.eql(119);
      expect(determineSeatId(102, 4)).to.eql(820);
    });
  });

  describe('#parseInput', () => {
    it('should parseInput', () => {
      expect(parseInput('BFFFBBFRRR')).to.eql({ row: 'BFFFBBF', column: 'RRR' });
      expect(parseInput('FFFBBBFRRR')).to.eql({ row: 'FFFBBBF', column: 'RRR' });
      expect(parseInput('BBFFBBFRLL')).to.eql({ row: 'BBFFBBF', column: 'RLL' });
    });
  });
});
