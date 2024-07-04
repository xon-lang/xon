import {$Node} from '../../../../$';
import {Nothing} from '../../../../../lib/types';
import {DIAGNOSTIC_MESSAGE} from '../../../../diagnostic/analyzer-diagnostic-message';
import {OperatorNode} from '../../../lexical/node/operator/operator-node';
import {StringNode} from '../../../lexical/node/string/string-node';
import {ExpressionNode} from '../../../node';
import {SyntaxAnalyzer} from '../../syntax-analyzer';
import {SyntaxNode, syntaxNode} from '../syntax-node';

export type ImportNode = SyntaxNode<$Node.ImportNode> &
  ExpressionNode & {
    operator: OperatorNode;
    value: StringNode | Nothing;
  };

export function importNode(
  analyzer: SyntaxAnalyzer,
  operator: OperatorNode,
  value: StringNode | Nothing,
): ImportNode {
  const node = syntaxNode($Node.ImportNode, {operator, value});

  validate(analyzer, node);
  format(analyzer, node);

  return node;
}

function validate(analyzer: SyntaxAnalyzer, node: ImportNode): void {
  if (!node.value) {
    analyzer.diagnosticManager.addError(node.range, DIAGNOSTIC_MESSAGE.importValueShouldBeString());
  }
}

function format(analyzer: SyntaxAnalyzer, node: ImportNode): void {
  if (node.value) {
    analyzer.formatterManager.formatChildNode(node.value, true);
  }
}
