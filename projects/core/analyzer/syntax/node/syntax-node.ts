import {$, is} from '../../../$';
import {Anything, Array2, String2, nothing} from '../../../../lib/types';
import {rangeFromNodes} from '../../../util/resource/text/text-range';
import {textResourceRange} from '../../../util/resource/text/text-resource-range';
import {Node} from '../../node';
import {SyntaxAnalyzer} from '../syntax-analyzer';

export type SyntaxNode<T extends $ = $> = Node<T> & {
  children: Array2<Node>;
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
  };

  const first = children.first();

  if (first) {
    node.hiddenNodes = first.hiddenNodes;
    first.hiddenNodes = nothing;
  }

  children.forEach((x) => (x.parent = node));

  return node;
}
