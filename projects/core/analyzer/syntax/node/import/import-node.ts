import {Nothing} from '../../../../../lib/types';
import {formatChildNode} from '../../../../formatter/formatter';
import {ISSUE_MESSAGE} from '../../../../issue/issue-message';
import {SyntaxContext} from '../../../syntax-context';
import {$Node, ExpressionNode} from '../../node';
import {OperatorNode} from '../../../lexical/token/operator/operator-node';
import {StringNode} from '../../../lexical/token/string/string-node';
import {SyntaxNode, syntaxNode} from '../syntax-node';

export type ImportNode = SyntaxNode<$Node.IMPORT> &
  ExpressionNode & {
    operator: OperatorNode;
    value: StringNode | Nothing;
  };

export function importNode(
  context: SyntaxContext,
  operator: OperatorNode,
  value: StringNode | Nothing,
): ImportNode {
  const node = syntaxNode($Node.IMPORT, {operator, value});

  validate(context, node);
  format(context, node);

  return node;
}

function validate(context: SyntaxContext, node: ImportNode): void {
  if (!node.value) {
    context.issueManager.addError(node.range, ISSUE_MESSAGE.importValueShouldBeString());
  }
}

function format(context: SyntaxContext, node: ImportNode): void {
  if (node.value) {
    formatChildNode(context, node.value, true);
  }
}
