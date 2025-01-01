import {Anything, Boolean2, newArrayData, newTextReference, nothing, rangeFromNodes, String2} from '#common';
import {$Node, SyntaxAnalyzer, SyntaxNode} from '#core';
import {is} from '#typing';

export function syntaxNode<T extends Pick<SyntaxNode, '$'> & Record<String2, Anything>>(
  analyzer: SyntaxAnalyzer,
  params: T,
): SyntaxNode & T {
  // todo use filter and flat from 'ArrayData'
  const children = newArrayData(
    Object.values(params)
      .filter((x) => is(x, $Node))
      .flat(),
  );
  const reference = newTextReference(analyzer.resource, rangeFromNodes(children));

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

  for (const child of children) {
    child.parent = node;
  }

  return node;
}
