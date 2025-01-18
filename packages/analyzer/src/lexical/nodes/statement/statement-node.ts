import {$SyntaxNode2, Node2, SyntaxNode2, analyzerPackageType, newSyntaxNode} from '#analyzer';
import {ArrayData, Integer, Nothing} from '#common';
import {Brand} from '#typing';

export type StatementNode2 = SyntaxNode2 &
  Brand<'Analyzer.StatementNode2'> & {
    indentLevel: Integer;
    value?: Node2 | Nothing;
    errorNodes?: ArrayData<Node2> | Nothing;
    afterHiddenNodes?: ArrayData<Node2> | Nothing;
    parent?: StatementNode2 | Nothing;
    body?: ArrayData<StatementNode2> | Nothing;
  };

export const $StatementNode2 = analyzerPackageType<StatementNode2>('StatementNode2', $SyntaxNode2);

export function newStatementNode(
  parent: StatementNode2 | Nothing,
  beforeHiddenNodes: ArrayData<Node2> | Nothing,
  value: Node2 | Nothing,
  errorNodes: ArrayData<Node2> | Nothing,
  afterHiddenNodes: ArrayData<Node2> | Nothing,
): StatementNode2 { 
  const indentLevel = (parent?.indentLevel ?? -1) + 1;

  const node = newSyntaxNode<StatementNode2>({
    $: $StatementNode2,
    indentLevel,
    value: value,
  });

  node.hiddenNodes = beforeHiddenNodes;
  node.errorNodes = errorNodes;
  node.afterHiddenNodes = afterHiddenNodes;
  node.parent = parent;

  return node;
}

// export function constructStatementNode2(
//   parentStatement: StatementNode2 | Nothing,
//   nodes: ArrayData<Node>,
//   indent: TextRange,
//   isFirstStatement: Boolean2,
// ): StatementNode2 {
//   statementNodeCollapse(analyzer, parentStatement, nodes);

//   // for (const node of nodes.slice(1)) {
//   //   analyzer.diagnosticManager.addPredefinedDiagnostic(node.reference, (x) => x.unexpectedExpression());
//   // }

//   return statementNode(analyzer, parentStatement, nodes, indent, isFirstStatement);
// }

// function format(
//   {formatterManager}: SyntaxAnalyzer,
//   statement: StatementNode2,
//   isFirstStatement: Boolean2,
// ): void {
//   const INDENT_SPACE_LENGTH = 2;

//   if (!statement.hiddenNodes || statement.hiddenNodes.isEmpty()) {
//     return;
//   }

//   const lastNlIndex = statement.hiddenNodes.lastIndex((x) => is(x, $NlNode)) ?? -1;

//   if (lastNlIndex >= 0) {
//     const beforeNlHiddenNodes = statement.hiddenNodes.slice(0, lastNlIndex + 1);
//     let text = formatterManager.formatHiddenNodes(beforeNlHiddenNodes, false);

//     if (text.count() > 0) {
//       if (isFirstStatement) {
//         text = text.trimStart();
//       } else if (!NL.equals(text.at2(0))) {
//         text = newText(' ').addLastItems(text);
//       }
//     }

//     if (!formatterManager.isSameContent(beforeNlHiddenNodes, text)) {
//       formatterManager.addItem({
//         range: rangeFromNodes(beforeNlHiddenNodes),
//         text,
//       });
//     }
//   }

//   const indentText = newText(' ').repeat(INDENT_SPACE_LENGTH * statement.indentLevel);
//   const afterIndentHiddenNodes = statement.hiddenNodes.slice(lastNlIndex + 1);
//   const nonWhitespaceNodes = afterIndentHiddenNodes.filter(
//     (x): x is LexicalNode => is(x, $LexicalNode) && !is(x, $WhitespaceNode),
//   );

//   const text = indentText
//     .addLastItems(
//       newText(
//         nonWhitespaceNodes.map((x) => x.text),
//         newText(' '),
//       ),
//     )
//     .addLastItems(newText(nonWhitespaceNodes.isEmpty() ? '' : ' '));
//   if (formatterManager.isSameContent(afterIndentHiddenNodes, text)) {
//     return;
//   }

//   formatterManager.addItem({
//     range: rangeFromNodes(afterIndentHiddenNodes),
//     text,
//   });
// }
