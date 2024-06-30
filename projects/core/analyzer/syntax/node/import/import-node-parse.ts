import {Array2, Integer, nothing} from '../../../../../lib/types';
import {IMPORT} from '../../../lexical/lexical-analyzer-config';
import {OperatorNode} from '../../../lexical/node/operator/operator-node';
import {StringNode} from '../../../lexical/node/string/string-node';
import {$Node, is, Node, nodeFindMap} from '../../../node';
import {SyntaxParseFn} from '../../statement/statement-node-collapse';
import {SyntaxAnalyzer} from '../../syntax-analyzer';
import {importNode} from './import-node';

export function importNodeParse(): SyntaxParseFn {
  return (analyzer: SyntaxAnalyzer, nodes: Array2<Node>, startIndex: Integer) => {
    return nodeFindMap(nodes, startIndex, false, (node, index, nodes) => {
      if (!is<OperatorNode>(node, $Node.OPERATOR) || node.text !== IMPORT) {
        return nothing;
      }

      const value = nodes[index + 1];

      if (!is<StringNode>(value, $Node.STRING)) {
        return {node: importNode(analyzer, node, nothing), index};
      }

      return {node: importNode(analyzer, node, value), index};
    });
  };
}
