import {Array2, Nothing, String2, nothing} from '../../../../lib/types';
import {rangeFromNodes} from '../../../util/resource/text/text-range';
import {$Node, Node} from '../node';

export interface SyntaxNode extends Node {
  children: Array2<Node>;
}

export function syntaxNode<T extends $Node, U extends Record<String2, Node | Nothing>>(
  $: T,
  nodes: U,
): SyntaxNode & {$: T} & U {
  const children = Object.values(nodes).filter<Node>((x): x is Node => !!x);
  const first = children.first();

  const node = {
    $,
    range: rangeFromNodes(children),
    children,
    hiddenNodes: first?.hiddenNodes,
    ...nodes,
  };

  if (first) {
    first.hiddenNodes = nothing;
  }

  children.forEach((x) => (x.parent = node));

  return node;
}
