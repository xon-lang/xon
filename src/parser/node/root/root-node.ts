import { Node } from '~/parser/node/node';
import { zeroRange } from '../../../source/source-range';
import { NodeType } from '../node-type';

export interface RootNode extends Node {
  $: NodeType.ROOT;
  parent: null;
  children: Node[];
  declarations: Node[];
}

export function rootNode(): RootNode {
  return {
    $: NodeType.ROOT,
    range: zeroRange(),
    parent: null,
    children: [],
    declarations: [],
  };
}
