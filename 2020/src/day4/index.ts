import parseInput from './parser';
import input from './input';

function countHasRequiredFieldsPassports(passports: string, optionalFields: string[]): number {
  const documents = parseInput(passports);

  return documents.filter((d) => d.hasRequiredFields(optionalFields)).length;
}

function countValidPassports(passports: string, optionalFields: string[]): number {
  const documents = parseInput(passports);

  return documents.filter((d) => d.isValid(optionalFields)).length;
}

function main() {
  /* eslint-disable no-console */
  console.log('Part 1:');
  const validCount = countHasRequiredFieldsPassports(input, ['cid']);
  console.log(validCount);

  console.log('\nPart 2:');
  const validCount2 = countValidPassports(input, ['cid']);
  console.log(validCount2);
}

export { main, countValidPassports, countHasRequiredFieldsPassports };
