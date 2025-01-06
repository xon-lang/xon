import {
  $SyntaxNode,
  corePackageType,
  OperatorNode,
  StringNode,
  SyntaxAnalyzer,
  SyntaxNode,
  syntaxNode,
} from '#analyzer';
import {Nothing} from '#common';

export type ImportNode = SyntaxNode & {
  operator: OperatorNode;
  value: StringNode | Nothing;
};

export const $ImportNode = corePackageType<ImportNode>('ImportNode', $SyntaxNode);

export function importNode(
  analyzer: SyntaxAnalyzer,
  operator: OperatorNode,
  value: StringNode | Nothing,
): ImportNode {
  const node = syntaxNode(analyzer, {$: $ImportNode, operator, value, isExpression: true});

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
