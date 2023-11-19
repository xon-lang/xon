import { Node } from '~/parser/node/node';
import { zeroRange } from '~/parser/node/node-position';
import { NodeType } from '../node-type';

export interface RootNode extends Node {
  $: NodeType.ROOT;
  children: Node[];
  declarations: Node[];
  parent: null;
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
