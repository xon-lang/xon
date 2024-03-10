import {Nothing, String2} from '../../../lib/core';
import {rangeFromNodes} from '../../../source/source-range';
import {$Node, Node} from '../node';

export interface SyntaxNode extends Node {
  readonly children: Node[];
}

export function syntaxNode<T extends Record<String2, Node | Nothing>, V extends $Node>(
  $: V,
  nodes: T,
): SyntaxNode & {$: typeof $} & T {
  const children = Object.values(nodes).filter((x): x is Node => !!x);

  if (children.length === 0) {
    throw new Error('Not implemented');
  }

  const first = children.first();
  const last = children.last();
  const range = rangeFromNodes([first, last]);

  const node = {
    $,
    range,
    children,
    hiddenNodes: last.hiddenNodes,
    ...nodes,
  };

  last.hiddenNodes = [];
  children.forEach((x) => (x.parent = node));

  return node;
}

export function getRangeAndChildren(
  ...nodes: (Node | Nothing)[]
): Pick<SyntaxNode, 'range' | 'children' | 'hiddenNodes'> {
  const children = nodes.filter((x): x is Node => !!x);
  const range = rangeFromNodes([children.first(), children.last()]);

  // todo move hiddenNodes to node initializer like syntaxNode()
  return {range, children, hiddenNodes: []};
}
