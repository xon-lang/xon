import {$, $Model} from '../$';
import {Array2, Boolean2, Integer, Nothing, nothing} from '../../lib/types';
import {TextRange} from '../util/resource/text/text-range';
import {Semantic} from './semantic/node/semantic';

export type Node<T extends $ = $> = $Model & {
  $: T;
  range: TextRange;
  parent?: Node | Nothing;
  isHidden?: Boolean2 | Nothing;
  hiddenNodes?: Array2<Node> | Nothing;
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
