import {Integer, nothing} from '../../../../lib/core';
import {ASSIGN} from '../../../parser-config';
import {SyntaxContext} from '../../../syntax-context';
import {$Node, is, isExpressionNode, nodeFindMap} from '../../node';
import {SyntaxParseFn} from '../../statement/statement-node-collapse';
import {IdNode} from '../../token/id/id-node';
import {OperatorNode} from '../../token/operator/operator-node';
import {prefixNode} from '../prefix/prefix-node';
import {assignmentNode} from './assignment-node';

export function assignmentNodeParse(): SyntaxParseFn {
  return (context: SyntaxContext, startIndex: Integer) => {
    return nodeFindMap(context.nodes, startIndex, true, (node, index, nodes) => {
      if (!is<OperatorNode>(node, $Node.OPERATOR) || node.text !== ASSIGN) {
        return nothing;
      }

      const id = nodes[index - 1];
      const value = nodes[index + 1];

      if (!is<IdNode>(id, $Node.ID) || !isExpressionNode(value)) {
        return nothing;
      }

      const assign = prefixNode(context, node, value);

      return {node: assignmentNode(context, id, assign), index: index - 1, deleteCount: 3};
    });
  };
}
