import {
  $LexicalNode,
  $NlNode,
  $SyntaxNode,
  $WhitespaceNode,
  LexicalNode,
  NL,
  Node,
  SyntaxAnalyzer,
  SyntaxNode,
  analyzerPackageType,
  statementNodeCollapse,
} from '#analyzer';
import {
  ArrayData,
  Boolean2,
  Integer,
  Nothing,
  TextRange,
  newArrayData,
  newText,
  newTextReference,
  rangeFromNodes,
} from '#common';
import {is} from '#typing';

export type StatementNode = SyntaxNode & {
  parent: StatementNode | Nothing;
  indentLevel: Integer;
  indent: TextRange;
  value: Node;
  body: ArrayData<StatementNode>;
};

export const $StatementNode = analyzerPackageType<StatementNode>('StatementNode', $SyntaxNode);

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

function format(
  {formatterManager}: SyntaxAnalyzer,
  statement: StatementNode,
  isFirstStatement: Boolean2,
): void {
  const INDENT_SPACE_LENGTH = 2;

  if (!statement.hiddenNodes || statement.hiddenNodes.isEmpty()) {
    return;
  }

  const lastNlIndex = statement.hiddenNodes.lastIndex((x) => is(x, $NlNode)) ?? -1;

  if (lastNlIndex >= 0) {
    const beforeNlHiddenNodes = statement.hiddenNodes.slice(0, lastNlIndex + 1);
    let text = formatterManager.formatHiddenNodes(beforeNlHiddenNodes, false);

    if (text.count() > 0) {
      if (isFirstStatement) {
        text = text.trimStart();
      } else if (!NL.equals(text.at2(0))) {
        text = newText(' ').addLastItems(text);
      }
    }

    if (!formatterManager.isSameContent(beforeNlHiddenNodes, text)) {
      formatterManager.addItem({
        range: rangeFromNodes(beforeNlHiddenNodes),
        text,
      });
    }
  }

  const indentText = newText(' ').repeat(INDENT_SPACE_LENGTH * statement.indentLevel);
  const afterIndentHiddenNodes = statement.hiddenNodes.slice(lastNlIndex + 1);
  const nonWhitespaceNodes = afterIndentHiddenNodes.filter(
    (x): x is LexicalNode => is(x, $LexicalNode) && !is(x, $WhitespaceNode),
  );

  const text = indentText
    .addLastItems(
      newText(
        nonWhitespaceNodes.map((x) => x.text),
        newText(' '),
      ),
    )
    .addLastItems(newText(nonWhitespaceNodes.isEmpty() ? '' : ' '));
  if (formatterManager.isSameContent(afterIndentHiddenNodes, text)) {
    return;
  }

  formatterManager.addItem({
    range: rangeFromNodes(afterIndentHiddenNodes),
    text,
  });
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
