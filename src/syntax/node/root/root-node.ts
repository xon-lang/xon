import { nothing } from '../../../lib/core';
import { zeroRange } from '../../../source/source-range';
import { $Node, StatementNode } from '../node';

export interface RootNode extends StatementNode {
  $: $Node.ROOT;
}

export function rootNode(): RootNode {
  return {
    $: $Node.ROOT,
    range: zeroRange(),
    parent: nothing,
    children: [],
    modelDeclarationSemantic: null,
  };
}
