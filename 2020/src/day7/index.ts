/* eslint-disable no-console */
import createBagGraph, { BagNode } from './BagGraph';
import parseInput from './parser';
import bagInput from './bagInput';

function countContains(graph: Map<string, BagNode>, color: string): number {
  let count = 0;

  const node = graph.get(color);
  if (node) {
    count += node.containedIn?.length || 0;
    node.containedIn?.forEach((parent) => {
      count += countContains(graph, parent);
    });
  }

  return count;
}

function countContainsBagColor(
  rules: string, bagColor: string,
): number {
  const parsedBags = parseInput(rules);
  const graph = createBagGraph(parsedBags);

  return countContains(graph, bagColor);
}

function main() {
  console.log(`Part 1: ${countContainsBagColor(bagInput, 'shiny gold')}`);
}

export { main, countContainsBagColor };
