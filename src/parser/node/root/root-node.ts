import { nothing } from '../../../lib/core';
import { StatementNode } from '../../../parser/node/node';
import { zeroRange } from '../../../source/source-range';
import { NodeType } from '../node-type';

export interface RootNode extends StatementNode {
  $: NodeType.ROOT;
}

export function rootNode(): RootNode {
  return {
    $: NodeType.ROOT,
    range: zeroRange(),
    parent: nothing,
    children: [],
    modelDeclarationType: null,
  };
}
