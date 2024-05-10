import {Integer, String2, nothing} from '../../../../lib/core';
import {SyntaxContext} from '../../../syntax-context';
import {$Node, findNode, is} from '../../node';
import {SyntaxParseFn} from '../../statement/statement-node-collapse';
import {OperatorNode} from '../../token/operator/operator-node';
import {StringNode} from '../../token/string/string-node';
import {importNode} from './import-node';

export function importNodeParse(operators: String2[]): SyntaxParseFn {
  return (context: SyntaxContext, index: Integer) => {
    const found = findNode(
      context.nodes,
      index,
      true,
      (x): x is OperatorNode => is<OperatorNode>(x, $Node.OPERATOR) && operators.includes(x.text),
    );

    if (!found) {
      return nothing;
    }

    const left = context.nodes[found.index - 1];
    const right = context.nodes[found.index + 1];

    if (is<StringNode>(right, $Node.STRING) && (found.index === 0 || is<OperatorNode>(left, $Node.OPERATOR))) {
      const node = importNode(context, found.node, right);

      return {node, spliceIndex: found.index};
    }

    return nothing;
  };
}