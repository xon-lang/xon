import { nothing } from '../../../lib/core';
import { StatementNode } from '../../../parser/node/node';
import { zeroRange } from '../../../source/source-range';
import { $Node } from '../node-type';

export interface RootNode extends StatementNode {
  $: $Node.ROOT;
}

export function rootNode(): RootNode {
  return {
    $: $Node.ROOT,
    range: zeroRange(),
    parent: nothing,
    children: [],
    modelDeclarationType: null,
  };
}
