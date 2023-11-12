import { NodePosition } from '~/parser/node/node-position';
import { NodeType } from './node-type';

export interface Node {
  readonly $: NodeType;
  start: NodePosition;
  stop: NodePosition;
}
