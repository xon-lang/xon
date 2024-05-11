import {formatBetweenHiddenNodes} from '../../../../formatter/formatter';
import {ISSUE_MESSAGE} from '../../../../issue/issue-message';
import {Nothing} from '../../../../lib/core';
import {SyntaxContext} from '../../../syntax-context';
import {$Node, ExpressionNode, is} from '../../node';
import {OperatorNode} from '../../token/operator/operator-node';
import {StringNode} from '../../token/string/string-node';
import {SyntaxNode, syntaxNode} from '../syntax-node';

export interface ImportNode extends SyntaxNode {
  $: $Node.IMPORT;
  operator: OperatorNode;
  value: ExpressionNode;
}

export function importNode(context: SyntaxContext, operator: OperatorNode, value: ExpressionNode): ImportNode {
  const node = syntaxNode($Node.IMPORT, {operator, value});

  validate(context, node);
  format(context, node);

  return node;
}

function validate(context: SyntaxContext, node: ImportNode): Nothing {
  if (!is<StringNode>(node.value, $Node.STRING)) {
    context.issueManager.addError(node.value.range, ISSUE_MESSAGE.importValueShouldBeString());
  }
}

function format(context: SyntaxContext, node: ImportNode): Nothing {
  formatBetweenHiddenNodes(context, node.value, true);
}
