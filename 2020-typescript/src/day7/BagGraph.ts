import { Bag } from './Bag';

export interface BagNode {
  bag: Bag;
  containedIn?: string[]
}

function createBagGraph(bags: Bag[]): Map<string, BagNode> {
  const graph = new Map<string, BagNode>();

  bags.forEach((b) => {
    graph.set(b.color, { bag: b });
  });

  bags.forEach((b) => {
    b.rules?.forEach((r) => {
      const ruleBagNode = graph.get(r.bagColor);
      if (!ruleBagNode) {
        return;
      }

      graph.set(r.bagColor, {
        bag: ruleBagNode.bag,
        containedIn: ruleBagNode.containedIn ? [...ruleBagNode.containedIn, b.color] : [b.color],
      });
    });
  });

  return graph;
}

export default createBagGraph;
