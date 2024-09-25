import {Anything, Boolean2, String2, nothing, rangeFromNodes, textResourceRange} from '#common';
import {Node, SyntaxAnalyzer} from '#core';
import {$, is} from '#typing';

export type SyntaxNode<T extends $ = $> = Node<T> & {
  children: Node[];
};

export function syntaxNode<
  T extends Omit<SyntaxNode, 'reference' | 'children' | 'hiddenNodes' | 'semantic'> &
    Record<String2, Anything>,
>(analyzer: SyntaxAnalyzer, params: T): SyntaxNode & T {
  const children = Object.values(params)
    .filter((x) => is(x, $.Node))
    .flat();

  const reference = textResourceRange(analyzer.resource, rangeFromNodes(children));

  const node: SyntaxNode & T = {
    ...params,
    reference,
    children,
    semantic: nothing,

    equals(other: SyntaxNode): Boolean2 {
      return this.reference.equals(other.reference);
    },
  };

  const first = children.first();

  if (first) {
    node.hiddenNodes = first.hiddenNodes;
    first.hiddenNodes = nothing;
  }

  children.forEach((x) => (x.parent = node));

  return node;
}
