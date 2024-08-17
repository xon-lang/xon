import {$, is} from '../../../../$';
import {Integer, nothing} from '../../../../../lib/types';
import {IMPORT} from '../../../lexical/lexical-analyzer-config';
import {Node, nodeFindMap} from '../../../node';
import {SyntaxParseFn} from '../../statement/statement-node-collapse';
import {SyntaxAnalyzer} from '../../syntax-analyzer';
import {importNode} from './import-node';

export function importNodeParse(): SyntaxParseFn {
  return (analyzer: SyntaxAnalyzer, nodes: Node[], startIndex: Integer) => {
    return nodeFindMap(nodes, startIndex, false, (node, index, nodes) => {
      if (!is(node, $.OperatorNode) || !node.text.equals(IMPORT)) {
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
