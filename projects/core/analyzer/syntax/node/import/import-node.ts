import {Nothing} from '../../../../../lib/types';
import {DIAGNOSTIC_MESSAGE} from '../../../../diagnostic/analyzer-diagnostic-message';
import {formatChildNode} from '../../../../formatter/formatter';
import {OperatorNode} from '../../../lexical/node/operator/operator-node';
import {StringNode} from '../../../lexical/node/string/string-node';
import {SyntaxContext} from '../../../syntax-context';
import {$Node, ExpressionNode} from '../../node';
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
    context.diagnosticManager.addError(node.range, DIAGNOSTIC_MESSAGE.importValueShouldBeString());
  }
}

function format(context: SyntaxContext, node: ImportNode): void {
  if (node.value) {
    formatChildNode(context, node.value, true);
  }
}
