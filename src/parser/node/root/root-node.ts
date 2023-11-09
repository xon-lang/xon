import { Node } from '~/parser/node/node';
import { NodeType } from '../node-type';

export interface RootNode extends Node {
  $: NodeType.ROOT;
}

export function rootNode(): RootNode {
  return {
    $: NodeType.ROOT,
  };
}
