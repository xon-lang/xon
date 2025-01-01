import {ArrayData, Boolean2, Integer, Nothing, nothing, TextReference} from '#common';
import {corePackageType, Semantic} from '#core';
import {Model} from '#typing';

export type Node = Model & {
  reference: TextReference;
  parent?: Node | Nothing;
  isHidden?: Boolean2 | Nothing;
  isExpression?: Boolean2 | Nothing;
  // todo remove 'semantic' field ???
  semantic?: Semantic | Nothing;
  hiddenNodes?: ArrayData<Node> | Nothing;
};

export const $Node = corePackageType<Node>('Node');

// todo move it out of node.ts
export function nodeFindMap<T>(
  nodes: ArrayData<Node>,
  startIndex: Integer,
  isLeftRecursive: Boolean2,
  predicateMap: (node: Node, index: Integer, nodes: ArrayData<Node>) => T,
): T | Nothing {
  if (isLeftRecursive) {
    for (let i = startIndex; i < nodes.length(); i++) {
      const result = predicateMap(nodes.at2(i), i, nodes);

      if (result) {
        return result;
      }
    }

    return nothing;
  }

  for (let i = nodes.length() - 1; i >= startIndex; i--) {
    const result = predicateMap(nodes.at2(i), i, nodes);

    if (result) {
      return result;
    }
  }

  return nothing;
}
