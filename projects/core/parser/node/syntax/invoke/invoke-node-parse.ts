import {Integer, nothing} from '../../../../lib/core';
import {SyntaxContext} from '../../../syntax-context';
import {SyntaxParseFn} from '../../../util/statement-collapse';
import {findNode, isExpressionNode, isGroupNode} from '../../node';
import {invokeNode} from './invoke-node';

export function invokeNodeParse(): SyntaxParseFn {
  return (context: SyntaxContext, index: Integer) => {
    const found = findNode(context.nodes, index, true, isGroupNode);

    if (!found) {
      return;
    }

    const instance = context.nodes[found.index - 1];

    if (!isExpressionNode(instance)) {
      return nothing;
    }

    const node = invokeNode(context, instance, found.node);

    return {node, spliceIndex: found.index - 1};
  };
}
