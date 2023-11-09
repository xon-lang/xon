import { Node, NodeType } from '~/parser/node/node';

export interface RootNode extends Node {
  $: NodeType.ROOT;
}

export function rootNode(): RootNode {
  return {
    $: NodeType.ROOT,
  };
}
