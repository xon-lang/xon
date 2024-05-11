import {Array2, Nothing, String2, nothing} from '../../../lib/core';
import {rangeFromNodes} from '../../../util/resource/text/text-range';
import {$Node, Node} from '../node';

export interface SyntaxNode extends Node {
  children: Array2<Node>;
}

type SyntaxChild = Node | Array2<Node | Nothing> | Nothing;

export function syntaxNode<T extends Record<String2, SyntaxChild>, V extends $Node>(
  $: V,
  nodes: T,
): SyntaxNode & {$: typeof $} & T {
  const children = Object.values(nodes).flatMap(flatExistingNodes);
  const first = children.first()!;
  const range = rangeFromNodes(children);

  const node = {
    $,
    range,
    children: children,
    hiddenNodes: first.hiddenNodes,
    ...nodes,
  };

  first.hiddenNodes = nothing;
  children.forEach((x) => (x.parent = node));

  return node;
}

function flatExistingNodes(nodes: SyntaxChild): Array2<Node> {
  if (!nodes) {
    return [];
  }

  if (Array.isArray(nodes)) {
    return nodes.filter((x): x is Node => !!x);
  }

  return [nodes];
}
