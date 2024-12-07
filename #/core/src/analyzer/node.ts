import {Boolean2, Integer, Model_V2, Nothing, nothing, TextReference} from '#common';
import {corePackageType, Semantic} from '#core';

export type Node = Model_V2 & {
  reference: TextReference;
  parent?: Node | Nothing;
  isHidden?: Boolean2 | Nothing;
  // todo remove 'semantic' field ???
  semantic?: Semantic | Nothing;
  hiddenNodes?: Node[] | Nothing;
};

export const $Node = corePackageType<Node>('Node');

// todo move it out of node.ts
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
