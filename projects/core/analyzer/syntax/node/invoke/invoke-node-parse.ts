import {Array2, Integer, nothing} from '../../../../../lib/types';
import {isGroupNode, isNonOperatorExpression, Node, nodeFindMap} from '../../../node';
import {SyntaxParseFn} from '../../statement/statement-node-collapse';
import {SyntaxAnalyzer} from '../../syntax-analyzer';
import {invokeNode} from './invoke-node';

export function invokeNodeParse(): SyntaxParseFn {
  return (analyzer: SyntaxAnalyzer, nodes: Array2<Node>, startIndex: Integer) => {
    return nodeFindMap(nodes, startIndex, true, (node, index, nodes) => {
      if (index === 0 || !isGroupNode(node)) {
        return nothing;
      }

      const instance = nodes[index - 1];

      if (!isNonOperatorExpression(instance)) {
        return nothing;
      }

      return {node: invokeNode(analyzer, instance, node), index: index - 1};
    });
  };
}
