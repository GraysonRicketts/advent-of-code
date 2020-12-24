import Topology from './Topology';

class Tree extends Topology {
  // eslint-disable-next-line class-methods-use-this
  isOpen(): boolean {
    return false;
  }
}

export default Tree;
