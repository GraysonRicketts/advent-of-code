import Topology from './Topology';

class Snow extends Topology {
  // eslint-disable-next-line class-methods-use-this
  isOpen(): boolean {
    return true;
  }
}

export default Snow;
