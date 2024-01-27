import { SyntaxNode } from '../../../parser/node/node';
import { zeroRange } from '../../../source/source-range';
import { NodeType } from '../node-type';

export interface RootNode extends SyntaxNode {
  $: NodeType.ROOT;
}

export function rootNode(): RootNode {
  return {
    $: NodeType.ROOT,
    range: zeroRange(),
    children: [],
  };
}
