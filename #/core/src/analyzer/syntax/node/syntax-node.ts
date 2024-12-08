import {Anything, Boolean2, is, nothing, rangeFromNodes, String2, textResourceRange} from '#common';
import {$Node, corePackageType, Node, SyntaxAnalyzer} from '#core';

export type SyntaxNode = Node & {
  children: Node[];
};

export const $SyntaxNode = corePackageType<SyntaxNode>('SyntaxNode');

export function syntaxNode<T extends Pick<SyntaxNode, '$'> & Record<String2, Anything>>(
  analyzer: SyntaxAnalyzer,
  params: T,
): SyntaxNode & T {
  const children = Object.values(params)
    .filter((x) => is(x, $Node))
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
