import {Integer, nothing} from '../../../../../lib/types';
import {TYPE} from '../../../lexical/lexical-analyzer-config';
import {OperatorNode} from '../../../lexical/node/operator/operator-node';
import {$Node, is, isNonOperatorExpression, nodeFindMap} from '../../../node';
import {SyntaxParseFn} from '../../statement/statement-node-collapse';
import {SyntaxContext} from '../../syntax-context';
import {typeNode} from './type-node';

function typeNodeParse(): SyntaxParseFn {
  return (context: SyntaxContext, startIndex: Integer) => {
    return nodeFindMap(context.nodes, startIndex, false, (node, index, nodes) => {
      if (
        !is<OperatorNode>(node, $Node.OPERATOR) ||
        node.text !== TYPE ||
        (index !== 0 && !is<OperatorNode>(nodes[index - 1], $Node.OPERATOR))
      ) {
        return nothing;
      }

      const value = nodes[index + 1];

      if (!isNonOperatorExpression(value)) {
        return nothing;
      }

      return {node: typeNode(context, node, value), index: index};
    });
  };
}
