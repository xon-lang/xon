import { Node, NodeType } from '~/parser/lexical/node';

export interface RootNode extends Node {
  $: NodeType.ROOT;
}

export function rootNode(): RootNode {
  return {
    $: NodeType.ROOT,
  };
}
