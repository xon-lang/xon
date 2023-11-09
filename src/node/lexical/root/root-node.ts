import { Node, NodeType } from '~/node/node';

export interface RootNode extends Node {
  $: NodeType.ROOT;
}

export function rootNode(): RootNode {
  return {
    $: NodeType.ROOT,
  };
}
