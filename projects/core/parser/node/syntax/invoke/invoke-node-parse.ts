import {Integer} from '../../../../lib/core';
import {SyntaxContext} from '../../../syntax-context';
import {SyntaxParseFn} from '../../../util/statement-collapse';
import {Group} from '../../group/group-node';
import {ExpressionNode, findNode, isExpressionNode, isGroupNode} from '../../node';
import {invokeNode} from './invoke-node';

export function invokeNodeParse(): SyntaxParseFn {
  return (context: SyntaxContext, index: Integer) => {
    const found = findNode(
      context.nodes,
      index,
      true,
      (x, index): x is Group => index > 0 && isGroupNode(x) && isExpressionNode(context.nodes[index - 1]),
    );

    if (!found) {
      return;
    }

    const instance = context.nodes[found.index - 1];
    const node = invokeNode(context, instance as ExpressionNode, found.node);

    return {node, spliceIndex: found.index - 1};
  };
}
