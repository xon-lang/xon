import {Array2, Nothing, String2, nothing} from '../../../../lib/types';
import {TextRange, rangeFromNodes} from '../../../util/resource/text/text-range';
import {$Node, Node} from '../node';

export type SyntaxNode<T extends $Node = $Node> = Node<T> & {
  children: Array2<Node>;
};

export function syntaxNode<T extends $Node, U extends Record<String2, Node | Array2<Node> | Nothing>>(
  $: T,
  nodes: U,
): {$: T} & {children: Array2<Node>; range: TextRange; semantic: Nothing} & U {
  const children = Object.values(nodes)
    .filter((x) => !!x)
    .flat();
  const first = children.first();

  const node = {
    $,
    range: rangeFromNodes(children),
    children,
    hiddenNodes: first?.hiddenNodes,
    semantic: nothing,
    ...nodes,
  };

  if (first) {
    first.hiddenNodes = nothing;
  }

  children.forEach((x) => (x.parent = node));

  return node;
}
