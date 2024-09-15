import {Nothing} from '#common';
import {$, ExpressionNode, OperatorNode, StringNode, SyntaxAnalyzer, SyntaxNode, syntaxNode} from '#core';

export type ImportNode = SyntaxNode<$.ImportNode> &
  ExpressionNode & {
    operator: OperatorNode;
    value: StringNode | Nothing;
  };

export function importNode(
  analyzer: SyntaxAnalyzer,
  operator: OperatorNode,
  value: StringNode | Nothing,
): ImportNode {
  const node = syntaxNode(analyzer, {$: $.ImportNode, operator, value});

  validate(analyzer, node);
  format(analyzer, node);

  return node;
}

function validate(analyzer: SyntaxAnalyzer, node: ImportNode): void {
  if (!node.value) {
    analyzer.diagnosticManager.addPredefinedDiagnostic(node.reference, (x) => x.importValueShouldBeString());
  }
}

function format(analyzer: SyntaxAnalyzer, node: ImportNode): void {
  if (node.value) {
    analyzer.formatterManager.formatChildNode(node.value, true);
  }
}
