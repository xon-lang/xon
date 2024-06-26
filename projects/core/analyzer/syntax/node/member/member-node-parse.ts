import {Integer, nothing} from '../../../../../lib/types';
import {IdNode} from '../../../lexical/node/id/id-node';
import {OperatorNode} from '../../../lexical/node/operator/operator-node';
import {$Node, is, isNonOperatorExpression, nodeFindMap} from '../../../node';
import {SyntaxContext} from '../../../syntax-context';
import {SyntaxParseFn} from '../../statement/statement-node-collapse';
import {memberNode} from './member-node';

export function memberNodeParse(operators: String[]): SyntaxParseFn {
  return (context: SyntaxContext, startIndex: Integer) => {
    return nodeFindMap(context.nodes, startIndex, true, (node, index, nodes) => {
      if (!is<OperatorNode>(node, $Node.OPERATOR) || !operators.includes(node.text)) {
        return nothing;
      }

      const instance = nodes[index - 1];

      if (!isNonOperatorExpression(instance)) {
        return nothing;
      }

      const right = nodes[index + 1];
      const id = is<IdNode>(right, $Node.ID) ? right : nothing;

      return {node: memberNode(context, instance, node, id), index: index - 1};
    });
  };
}
