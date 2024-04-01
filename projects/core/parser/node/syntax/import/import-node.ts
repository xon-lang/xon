import {formatBetweenHiddenNodes} from '../../../../formatter/formatter';
import {Nothing} from '../../../../lib/core';
import {SyntaxContext} from '../../../syntax-context';
import {$Node} from '../../node';
import {OperatorNode} from '../../token/operator/operator-node';
import {StringNode} from '../../token/string/string-node';
import {SyntaxNode, syntaxNode} from '../syntax-node';

export interface ImportNode extends SyntaxNode {
  $: $Node.IMPORT;
  operator: OperatorNode;
  location: StringNode;
}

export function importNode(context: SyntaxContext, operator: OperatorNode, location: StringNode): ImportNode {
  const node = syntaxNode($Node.IMPORT, {operator, location});

  format(context, node);

  return node;
}

function format(context: SyntaxContext, node: ImportNode): Nothing {
  formatBetweenHiddenNodes(context, node.operator, true);
}

importNodeParse(context: SyntaxContext, startIndex: Integer): Nothing {
  is<OperatorNode>(operator, $Node.OPERATOR) && operators.includes(operator.text)
  const foundOperator = findOperatorNode(context, startIndex, this.operators);

  if (!foundOperator) {
    return;
  }

  const {index, operator} = foundOperator;
  const left = context.nodes[index - 1];
  const right = context.nodes[index + 1];

  if (is<StringNode>(right, $Node.STRING) && (index === 0 || is<OperatorNode>(left, $Node.OPERATOR))) {
    const node = importNode(context, operator, right);

    context.nodes.splice(index, node.children.length, node);
    this.collapse(context, index);
  }
},