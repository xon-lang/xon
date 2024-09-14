import {$, is} from '../../../../$';
import {Boolean2, Integer, nothing, String2} from '../../../../../lib/types';
import {Node, nodeFindMap} from '../../../node';
import {SyntaxParseFn} from '../../statement/statement-node-collapse';
import {SyntaxAnalyzer} from '../../syntax-analyzer';
import {importNode} from './import-node';

export function importNodeParse(operator: String2, isLeftRecursive: Boolean2): SyntaxParseFn {
  return (analyzer: SyntaxAnalyzer, nodes: Node[], startIndex: Integer) => {
    return nodeFindMap(nodes, startIndex, isLeftRecursive, (node, index, nodes) => {
      if (!is(node, $.OperatorNode) || !node.text.equals(operator)) {
        return nothing;
      }

      const value = nodes[index + 1];

      if (!is(value, $.StringNode)) {
        return {node: importNode(analyzer, node, nothing), index};
      }

      return {node: importNode(analyzer, node, value), index};
    });
  };
}
