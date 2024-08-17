import {$, is, isNonOperatorExpression} from '../../../../$';
import {Integer, nothing} from '../../../../../lib/types';
import {Node, nodeFindMap} from '../../../node';
import {SyntaxParseFn} from '../../statement/statement-node-collapse';
import {SyntaxAnalyzer} from '../../syntax-analyzer';
import {invokeNode} from './invoke-node';

export function invokeNodeParse(): SyntaxParseFn {
  return (analyzer: SyntaxAnalyzer, nodes: Node[], startIndex: Integer) => {
    return nodeFindMap(nodes, startIndex, true, (node, index, nodes) => {
      if (index === 0 || !is(node, $.GroupNode)) {
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
