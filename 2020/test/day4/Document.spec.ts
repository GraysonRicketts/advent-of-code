import { expect } from "chai";
import { Document } from "../../src/day4/Document";

describe('Document', () => {
  describe('#isValid', () => {
    it('Should return true if all required fields exist', () => {
      const doc = new Document([
        { fieldName: 'ecl', value: 'gry' },
        { fieldName: 'pid', value: '860033327' },
        { fieldName: 'eyr', value: '2020' },
        { fieldName: 'hcl', value: '#fffffd' },
        { fieldName: 'byr', value: '1937' },
        { fieldName: 'iyr', value: '2017' },
        { fieldName: 'cid', value: '147' },
        { fieldName: 'hgt', value: '183cm' }
      ]);

      const output = doc.isValid();
      expect(output).eql(true);
    })
    it('Should return true if all required fields exist and optional exists', () => {
      const doc = new Document([
        { fieldName: 'ecl', value: 'gry' },
        { fieldName: 'pid', value: '860033327' },
        { fieldName: 'eyr', value: '2020' },
        { fieldName: 'hcl', value: '#fffffd' },
        { fieldName: 'byr', value: '1937' },
        { fieldName: 'iyr', value: '2017' },
        { fieldName: 'cid', value: '147' },
        { fieldName: 'hgt', value: '183cm' }
      ]);

      const output = doc.isValid();
      expect(output).eql(true);
    })
    it('Should return true if all required fields exist and optional does not', () => {
      const doc = new Document([
        { fieldName: 'iyr', value: '2013' },
        { fieldName: 'ecl', value: 'amb' },
        { fieldName: 'cid', value: '350' },
        { fieldName: 'eyr', value: '2023' },
        { fieldName: 'pid', value: '028048884' },
        { fieldName: 'hcl', value: '#cfa07d' },
        { fieldName: 'byr', value: '1929' },
      ]);

      const output = doc.isValid(['hgt']);
      expect(output).eql(true);
    })
    it('Should return false if all required fields do not exist', () => {
      const doc = new Document([
        { fieldName: 'iyr', value: '2013' },
        { fieldName: 'ecl', value: 'amb' },
        { fieldName: 'cid', value: '350' },
        { fieldName: 'eyr', value: '2023' },
        { fieldName: 'pid', value: '028048884' },
        { fieldName: 'hcl', value: '#cfa07d' },
        { fieldName: 'byr', value: '1929' },
      ]);

      const output = doc.isValid();
      expect(output).eql(false);
    })
    it('Should return false if birth year is out of range', () => {
      const doc = new Document([
        { fieldName: 'ecl', value: 'gry' },
        { fieldName: 'pid', value: '860033327' },
        { fieldName: 'eyr', value: '2020' },
        { fieldName: 'hcl', value: '#fffffd' },
        { fieldName: 'byr', value: '1837' },
        { fieldName: 'iyr', value: '2017' },
        { fieldName: 'cid', value: '147' },
        { fieldName: 'hgt', value: '183cm' }
      ]);

      const output = doc.isValid();
      expect(output).eql(false);
    })
    it('Should return false if issue year is out of range', () => {
      const doc = new Document([
        { fieldName: 'ecl', value: 'gry' },
        { fieldName: 'pid', value: '860033327' },
        { fieldName: 'eyr', value: '2020' },
        { fieldName: 'hcl', value: '#fffffd' },
        { fieldName: 'byr', value: '1937' },
        { fieldName: 'iyr', value: '1917' },
        { fieldName: 'cid', value: '147' },
        { fieldName: 'hgt', value: '183cm' }
      ]);

      const output = doc.isValid();
      expect(output).eql(false);
    })
    it('Should return false if expiration year is out of range', () => {
      const doc = new Document([
        { fieldName: 'ecl', value: 'gry' },
        { fieldName: 'pid', value: '860033327' },
        { fieldName: 'eyr', value: '2019' },
        { fieldName: 'hcl', value: '#fffffd' },
        { fieldName: 'byr', value: '1937' },
        { fieldName: 'iyr', value: '2017' },
        { fieldName: 'cid', value: '147' },
        { fieldName: 'hgt', value: '183cm' }
      ]);

      const output = doc.isValid();
      expect(output).eql(false);
    })
    it('Should return false if height (cm) is out of range', () => {
      const doc = new Document([
        { fieldName: 'ecl', value: 'gry' },
        { fieldName: 'pid', value: '860033327' },
        { fieldName: 'eyr', value: '2020' },
        { fieldName: 'hcl', value: '#fffffd' },
        { fieldName: 'byr', value: '1937' },
        { fieldName: 'iyr', value: '2017' },
        { fieldName: 'cid', value: '147' },
        { fieldName: 'hgt', value: '203cm' }
      ]);

      const output = doc.isValid();
      expect(output).eql(false);
    })
    it('Should return false if height (in) is out of range', () => {
      const doc = new Document([
        { fieldName: 'ecl', value: 'gry' },
        { fieldName: 'pid', value: '860033327' },
        { fieldName: 'eyr', value: '2020' },
        { fieldName: 'hcl', value: '#fffffd' },
        { fieldName: 'byr', value: '1937' },
        { fieldName: 'iyr', value: '2017' },
        { fieldName: 'cid', value: '147' },
        { fieldName: 'hgt', value: '50in' }
      ]);

      const output = doc.isValid();
      expect(output).eql(false);
    })
    it('Should return false if hair color is invalid', () => {
      const doc = new Document([
        { fieldName: 'ecl', value: 'gry' },
        { fieldName: 'pid', value: '860033327' },
        { fieldName: 'eyr', value: '2020' },
        { fieldName: 'hcl', value: '#123ghy' },
        { fieldName: 'byr', value: '1937' },
        { fieldName: 'iyr', value: '2017' },
        { fieldName: 'cid', value: '147' },
        { fieldName: 'hgt', value: '183cm' }
      ]);

      const output = doc.isValid();
      expect(output).eql(false);
    })
    it('Should return false if eye color is invalid', () => {
      const doc = new Document([
        { fieldName: 'ecl', value: 'lol' },
        { fieldName: 'pid', value: '860033327' },
        { fieldName: 'eyr', value: '2020' },
        { fieldName: 'hcl', value: '#fffffd' },
        { fieldName: 'byr', value: '1937' },
        { fieldName: 'iyr', value: '2017' },
        { fieldName: 'cid', value: '147' },
        { fieldName: 'hgt', value: '183cm' }
      ]);

      const output = doc.isValid();
      expect(output).eql(false);
    })
    it('Should return false if passport id is invalid', () => {
      const doc = new Document([
        { fieldName: 'ecl', value: 'gry' },
        { fieldName: 'pid', value: '8600337' },
        { fieldName: 'eyr', value: '2020' },
        { fieldName: 'hcl', value: '#fffffd' },
        { fieldName: 'byr', value: '1937' },
        { fieldName: 'iyr', value: '2017' },
        { fieldName: 'cid', value: '147' },
        { fieldName: 'hgt', value: '183cm' }
      ]);

      const output = doc.isValid();
      expect(output).eql(false);
    })
  })
})