import { expect } from 'chai';
import { Document } from '../../src/day4/Document';
import parseInput from '../../src/day4/parser';

describe('parser', () => {
  describe('parseInput', () => {
    it('Should take string and turn into documents', () => {
      const input = `ecl:gry pid:860033327 eyr:2020 hcl:#fffffd
byr:1937 iyr:2017 cid:147 hgt:183cm

iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884
hcl:#cfa07d byr:1929

hcl:#ae17e1 iyr:2013
eyr:2024
ecl:brn pid:760753108 byr:1931
hgt:179cm

hcl:#cfa07d eyr:2025 pid:166559648
iyr:2011 ecl:brn hgt:59in`;
      const expected: Document[] = [
        new Document([
          { fieldName: 'ecl', value: 'gry' },
          { fieldName: 'pid', value: '860033327' },
          { fieldName: 'eyr', value: '2020' },
          { fieldName: 'hcl', value: '#fffffd' },
          { fieldName: 'byr', value: '1937' },
          { fieldName: 'iyr', value: '2017' },
          { fieldName: 'cid', value: '147' },
          { fieldName: 'hgt', value: '183cm' },
        ]),
        new Document([
          { fieldName: 'iyr', value: '2013' },
          { fieldName: 'ecl', value: 'amb' },
          { fieldName: 'cid', value: '350' },
          { fieldName: 'eyr', value: '2023' },
          { fieldName: 'pid', value: '028048884' },
          { fieldName: 'hcl', value: '#cfa07d' },
          { fieldName: 'byr', value: '1929' },
        ]),
        new Document([
          { fieldName: 'hcl', value: '#ae17e1' },
          { fieldName: 'iyr', value: '2013' },
          { fieldName: 'eyr', value: '2024' },
          { fieldName: 'ecl', value: 'brn' },
          { fieldName: 'pid', value: '760753108' },
          { fieldName: 'byr', value: '1931' },
          { fieldName: 'hgt', value: '179cm' },
        ]),
        new Document([
          { fieldName: 'hcl', value: '#cfa07d' },
          { fieldName: 'eyr', value: '2025' },
          { fieldName: 'pid', value: '166559648' },
          { fieldName: 'iyr', value: '2011' },
          { fieldName: 'ecl', value: 'brn' },
          { fieldName: 'hgt', value: '59in' },
        ]),
      ];
      const output = parseInput(input);
      expect(output).eql(expected);
    });
  });
});
