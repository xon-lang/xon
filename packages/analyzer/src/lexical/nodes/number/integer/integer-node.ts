import {$NumberNode, analyzerPackageType, IntegerContentNode, newSyntaxNode, NumberNode} from '#analyzer';
import {Brand} from '#typing';

export type IntegerNode = NumberNode &
  Brand<'Analyzer.IntegerNode'> & {
    contentNode: IntegerContentNode;
  };

export const $IntegerNode = analyzerPackageType<IntegerNode>('IntegerNode', $NumberNode);

export function newIntegerNode(contentNode: IntegerContentNode): IntegerNode {
  return newSyntaxNode({$: $IntegerNode, isExpression: true, contentNode});
}
