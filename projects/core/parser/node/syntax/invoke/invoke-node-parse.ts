import {Integer, nothing} from '../../../../lib/core';
import {SyntaxContext} from '../../../syntax-context';
import {SyntaxParseFn} from '../../../util/statement-collapse';
import {$Node, findNode, is} from '../../node';
import {OperatorNode} from '../../token/operator/operator-node';
import {ArrayNode} from '../array/array-node';
import {GroupNode} from '../group/group-node';
import {ObjectNode} from '../object/object-node';
import {invokeNode} from './invoke-node';

export function invokeNodeParse(): SyntaxParseFn {
  return (context: SyntaxContext, index: Integer) => {
    const found =
      findNode(context.nodes, index, true, (x): x is GroupNode => is<GroupNode>(x, $Node.GROUP)) ??
      findNode(context.nodes, index, true, (x): x is ArrayNode => is<ArrayNode>(x, $Node.ARRAY)) ??
      findNode(context.nodes, index, true, (x): x is ObjectNode => is<ObjectNode>(x, $Node.OBJECT));

    if (!found) {
      return;
    }

    const instance = context.nodes[found.index - 1];

    if (found.index > 0 && instance && !is<OperatorNode>(instance, $Node.OPERATOR)) {
      const node = invokeNode(context, instance, found.node);

      return {node, spliceIndex: found.index - 1};
    }

    return nothing;
  };
}
