import {Integer, nothing} from '../../../../../lib/types';
import {ASSIGN} from '../../../lexical/lexical-analyzer-config';
import {IdNode} from '../../../lexical/node/id/id-node';
import {OperatorNode} from '../../../lexical/node/operator/operator-node';
import {$Node, is, isNonOperatorExpression, nodeFindMap} from '../../../node';
import {SyntaxContext} from '../../../syntax-context';
import {SyntaxParseFn} from '../../statement/statement-node-collapse';
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

      if (!is<IdNode>(id, $Node.ID) || !isNonOperatorExpression(value)) {
        return nothing;
      }

      const assign = prefixNode(context, node, value);

      return {node: assignmentNode(context, id, assign), index: index - 1, deleteCount: 3};
    });
  };
}
