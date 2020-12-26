/* eslint-disable no-console */
import createBagGraph, { BagNode } from './BagGraph';
import parseInput from './parser';
import bagInput from './bagInput';

function getContainedIn(
  graph: Map<string, BagNode>, color: string, containedIn: Set<string>,
): Set<string> {
  const node = graph.get(color);
  if (node) {
    node.containedIn?.forEach((parent) => {
      getContainedIn(graph, parent, new Set()).forEach((v) => {
        containedIn.add(v);
      });
      containedIn.add(parent);
    });
  }

  return containedIn;
}

function countContainsBagColor(
  rules: string, bagColor: string,
): number {
  const parsedBags = parseInput(rules);
  const graph = createBagGraph(parsedBags);

  const totalContainedIn = getContainedIn(graph, bagColor, new Set<string>());

  return totalContainedIn.size;
}

function countNested(graph: Map<string, BagNode>, color: string, countAbove: number): number {
  const node = graph.get(color);
  if (!node) {
    throw new Error(`Node should exist: ${color}`);
  }

  let count = 1;
  node.bag.rules?.forEach((r) => {
    count += countNested(graph, r.bagColor, r.count);
  });

  return count * countAbove;
}

function countNumberOfNestBages(rules: string, bagColor: string): number {
  const parsedBags = parseInput(rules);
  const graph = createBagGraph(parsedBags);

  // minus one because we don't consider the bagColor as a counted bag
  const totalNested = countNested(graph, bagColor, 1) - 1;
  return totalNested;
}

function main() {
  console.log(`Part 1: ${countContainsBagColor(bagInput, 'shiny gold')}`);
  console.log(`Part 2: ${countNumberOfNestBages(bagInput, 'shiny gold')}`);
}

export { main, countContainsBagColor, countNumberOfNestBages };
