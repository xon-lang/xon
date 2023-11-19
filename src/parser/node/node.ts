import { TextRange } from '~/parser/node/node-position';
import { NodeType } from './node-type';

export interface Node {
  $: NodeType;
  range: TextRange;
  parent?: Node | null;
  children?: Node[] | null;
  declarations?: Node[] | null;
}
