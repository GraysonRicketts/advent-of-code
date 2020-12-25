/* eslint-disable no-console */
import input from './input';

function countAnyoneYeses(str: string): number {
  let yessesCount = 0;
  const grps = str.split('\n\n');
  grps.forEach((g) => {
    const people = g.split('\n');
    const yesQuestions = new Set();
    people.forEach((p) => {
      const yeses = p.split('');

      yeses.forEach((y) => yesQuestions.add(y));
    });

    yessesCount += yesQuestions.size;
  });
  return yessesCount;
}

function countEveryoneYeses(str: string): number {
  let yessesCount = 0;
  const grps = str.split('\n\n');
  grps.forEach((g) => {
    const people = g.trimEnd().split('\n');
    const yesQuestions = new Map<string, number>();
    people.forEach((p) => {
      const yeses = p.split('');

      yeses.forEach((y) => {
        yesQuestions.set(y, (yesQuestions.get(y) || 0) + 1);
      });
    });

    yesQuestions.forEach((y) => {
      yessesCount += y === people.length ? 1 : 0;
    });
  });
  return yessesCount;
}

function main() {
  console.log(`Part 1:\n${countAnyoneYeses(input)}`);
  console.log(`Part 2:\n${countEveryoneYeses(input)}`);
}

export { main, countAnyoneYeses, countEveryoneYeses };
