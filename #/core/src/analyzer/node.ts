import {Boolean2, Integer, Nothing, nothing, TextReference} from '#/common';
import {Semantic} from '#/core';
import {$, $Model} from '#/typing';

export type Node<T extends $ = $> = $Model & {
  $: T;
  reference: TextReference;
  parent?: Node | Nothing;
  isHidden?: Boolean2 | Nothing;
  hiddenNodes?: Node[] | Nothing;
};

export type ExpressionNode = Node & {
  semantic?: Semantic | Nothing;
};

export function nodeFindMap<T>(
  nodes: Node[],
  startIndex: Integer,
  isLeftRecursive: Boolean2,
  predicateMap: (node: Node, index: Integer, nodes: Node[]) => T,
): T | Nothing {
  if (isLeftRecursive) {
    for (let i = startIndex; i < nodes.length; i++) {
      const result = predicateMap(nodes[i], i, nodes);

      if (result) {
        return result;
      }
    }

    return nothing;
  }

  for (let i = nodes.length - 1; i >= startIndex; i--) {
    const result = predicateMap(nodes[i], i, nodes);

    if (result) {
      return result;
    }
  }

  return nothing;
}
