import {$, is, isNonOperatorExpression} from '../../../../$';
import {Array2, Integer, nothing} from '../../../../../lib/types';
import {ASSIGN} from '../../../lexical/lexical-analyzer-config';
import {Node, nodeFindMap} from '../../../node';
import {SyntaxParseFn} from '../../statement/statement-node-collapse';
import {SyntaxAnalyzer} from '../../syntax-analyzer';
import {prefixNode} from '../prefix/prefix-node';
import {assignmentNode} from './assignment-node';

export function assignmentNodeParse(): SyntaxParseFn {
  return (analyzer: SyntaxAnalyzer, nodes: Array2<Node>, startIndex: Integer) => {
    return nodeFindMap(nodes, startIndex, true, (node, index, nodes) => {
      if (!is(node, $.OperatorNode) || !node.text.equals(ASSIGN)) {
        return nothing;
      }

      const id = nodes[index - 1];
      const value = nodes[index + 1];

      if (!is(id, $.IdNode) || !isNonOperatorExpression(value)) {
        return nothing;
      }

      const assign = prefixNode(analyzer, node, value);

      return {node: assignmentNode(analyzer, id, assign), index: index - 1, deleteCount: 3};
    });
  };
}
