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
  console.log({ stripedViolet: graph.get('striped violet')?.bag.rules });

  const totalContainedIn = getContainedIn(graph, bagColor, new Set<string>());
  console.log({ totalContainedIn });

  return totalContainedIn.size;
}

function main() {
  console.log(`Part 1: ${countContainsBagColor(bagInput, 'shiny gold')}`);
}

export { main, countContainsBagColor };
