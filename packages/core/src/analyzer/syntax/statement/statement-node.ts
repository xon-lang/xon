import {
  ArrayData,
  Boolean2,
  Integer,
  Nothing,
  TextRange,
  newArrayData,
  newTextReference,
  rangeFromNodes,
} from '#common';
import {$SyntaxNode, Node, SyntaxAnalyzer, SyntaxNode, corePackageType, statementNodeCollapse} from '#core';

export type StatementNode = SyntaxNode & {
  parent: StatementNode | Nothing;
  indentLevel: Integer;
  indent: TextRange;
  value: Node;
  body: ArrayData<StatementNode>;
};

export const $StatementNode = corePackageType<StatementNode>('StatementNode', $SyntaxNode);

export function statementNode(
  analyzer: SyntaxAnalyzer,
  parentStatement: StatementNode | Nothing,
  children: ArrayData<Node>,
  indent: TextRange,
  isFirstStatement: Boolean2,
): StatementNode {
  const reference = newTextReference(analyzer.resource, rangeFromNodes(children));

  const statement: StatementNode = {
    $: $StatementNode,
    reference,
    hiddenNodes: children.at(0)?.hiddenNodes,
    children: children,
    indent,
    indentLevel: (parentStatement?.indentLevel ?? -1) + 1,
    parent: parentStatement,
    value: children.at2(0),
    body: newArrayData(),

    // todo fix equals
    equals(other) {
      return false;
    },
  };

  children.at2(0).hiddenNodes = newArrayData();

  for (const child of children) {
    child.parent = statement;
  }

  format(analyzer, statement, isFirstStatement);

  return statement;
}

export function format(analyzer: SyntaxAnalyzer, node: StatementNode, isFirstStatement: Boolean2): void {
  analyzer.formatterManager.formatStatementNode(node, isFirstStatement);
}

export function constructStatementNode(
  analyzer: SyntaxAnalyzer,
  parentStatement: StatementNode | Nothing,
  nodes: ArrayData<Node>,
  indent: TextRange,
  isFirstStatement: Boolean2,
): StatementNode {
  statementNodeCollapse(analyzer, parentStatement, nodes);

  for (const node of nodes.slice(1)) {
    analyzer.diagnosticManager.addPredefinedDiagnostic(node.reference, (x) => x.unexpectedExpression());
  }

  return statementNode(analyzer, parentStatement, nodes, indent, isFirstStatement);
}
