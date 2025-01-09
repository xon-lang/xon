import {$NumberNode, analyzerPackageType, IntegerContentNode, NumberNode, rangeFromNodes2} from '#analyzer';
import {newArrayData} from '#common';
import {Brand} from '#typing';

export type IntegerNode = NumberNode &
  Brand<'Analyzer.IntegerNode'> & {
    contentNode: IntegerContentNode;
  };

export const $IntegerNode = analyzerPackageType<IntegerNode>('IntegerNode', $NumberNode);

export function newIntegerNode(contentNode: IntegerContentNode): IntegerNode {
  const children = newArrayData([contentNode]);
  const range = rangeFromNodes2(children);

  return {
    $: $IntegerNode,
    isExpression: true,
    children,
    range,
    contentNode,
  };
}
