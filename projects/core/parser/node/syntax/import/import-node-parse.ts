import {Integer, nothing} from '../../../../lib/core';
import {IMPORT} from '../../../parser-config';
import {SyntaxContext} from '../../../syntax-context';
import {$Node, is, isExpressionNode, nodeFindMap} from '../../node';
import {SyntaxParseFn} from '../../statement/statement-node-collapse';
import {OperatorNode} from '../../token/operator/operator-node';
import {importNode} from './import-node';

export function importNodeParse(): SyntaxParseFn {
  return (context: SyntaxContext, startIndex: Integer) => {
    return nodeFindMap(context.nodes, startIndex, false, (node, index, nodes) => {
      if (!is<OperatorNode>(node, $Node.OPERATOR) || node.text !== IMPORT) {
        return nothing;
      }

      const value = nodes[index + 1];

      if (!isExpressionNode(value)) {
        return nothing;
      }

      return {node: importNode(context, node, value), spliceIndex: index};
    });
  };
}
