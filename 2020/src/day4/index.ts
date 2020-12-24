import { parseInput } from "./parser"
import { input } from './input';

function countHasRequiredFieldsPassports(input: string, optionalFields: string[]): number {
  const documents = parseInput(input);

  return documents.filter(d => d.hasRequiredFields(optionalFields)).length;
}

function countValidPassports(input: string, optionalFields: string[]): number {
  const documents = parseInput(input);

  return documents.filter(d => d.isValid(optionalFields)).length;
}

function main() {
  console.log('Part 1:');
  const validCount = countHasRequiredFieldsPassports(input, ['cid'])
  console.log(validCount);

  console.log('\nPart 2:')
  const validCount2 = countValidPassports(input, ['cid'])
  console.log(validCount2);
}

export { main, countValidPassports, countHasRequiredFieldsPassports }