import {Boolean2, Integer, Nothing, TextRange, rangeFromNodes, textResourceRange} from '#common';
import {$SyntaxNode, Node, SyntaxAnalyzer, SyntaxNode, corePackageType, statementNodeCollapse} from '#core';

export type StatementNode = SyntaxNode & {
  parent: StatementNode | Nothing;
  indentLevel: Integer;
  indent: TextRange;
  children: Node[];
  value: Node;
  body: StatementNode[];
};

export const $StatementNode = corePackageType<StatementNode>('StatementNode', $SyntaxNode);

export function statementNode(
  analyzer: SyntaxAnalyzer,
  parentStatement: StatementNode | Nothing,
  children: Node[],
  indent: TextRange,
  isFirstStatement: Boolean2,
): StatementNode {
  const reference = textResourceRange(analyzer.resource, rangeFromNodes(children));

  const statement: StatementNode = {
    $: $StatementNode,
    reference,
    hiddenNodes: children[0].hiddenNodes,
    children,
    indent,
    indentLevel: (parentStatement?.indentLevel ?? -1) + 1,
    parent: parentStatement,
    value: children[0],
    body: [],

    // todo fix equals
    equals(other) {
      return false;
    },
  };

  children[0].hiddenNodes = [];
  children.forEach((x) => (x.parent = statement));

  format(analyzer, statement, isFirstStatement);

  return statement;
}

export function format(analyzer: SyntaxAnalyzer, node: StatementNode, isFirstStatement: Boolean2): void {
  analyzer.formatterManager.formatStatementNode(node, isFirstStatement);
}

export function constructStatementNode(
  analyzer: SyntaxAnalyzer,
  parentStatement: StatementNode | Nothing,
  nodes: Node[],
  indent: TextRange,
  isFirstStatement: Boolean2,
): StatementNode {
  statementNodeCollapse(analyzer, parentStatement, nodes);

  nodes
    .slice(1)
    .forEach((node) =>
      analyzer.diagnosticManager.addPredefinedDiagnostic(node.reference, (x) => x.unexpectedExpression()),
    );

  return statementNode(analyzer, parentStatement, nodes, indent, isFirstStatement);
}
