import {Integer, nothing} from '../../../../../lib/types';
import {IMPORT} from '../../../lexical/lexical-config';
import {OperatorNode} from '../../../lexical/node/operator/operator-node';
import {StringNode} from '../../../lexical/node/string/string-node';
import {SyntaxContext} from '../../../syntax-context';
import {$Node, is, nodeFindMap} from '../../node';
import {SyntaxParseFn} from '../../statement/statement-node-collapse';
import {importNode} from './import-node';

export function importNodeParse(): SyntaxParseFn {
  return (context: SyntaxContext, startIndex: Integer) => {
    return nodeFindMap(context.nodes, startIndex, false, (node, index, nodes) => {
      if (!is<OperatorNode>(node, $Node.OPERATOR) || node.text !== IMPORT) {
        return nothing;
      }

      const value = nodes[index + 1];

      if (!is<StringNode>(value, $Node.STRING)) {
        return {node: importNode(context, node, nothing), index};
      }

      return {node: importNode(context, node, value), index};
    });
  };
}
