import { BodyNode } from '#analyzer';
import {$AnalyzerType, $SyntaxNode, Node, SyntaxNode} from '#analyzer';
import {ArrayData, Integer, Nothing} from '#common';
import {Brand} from '#typing';

export type StatementNode = SyntaxNode &
  Brand<'Analyzer.StatementNode'> & {
    indent: Integer;
    errorNodes?: ArrayData<Node> | Nothing;
    parent?: BodyNode | Nothing;
    body?: BodyNode | Nothing;
  };

export const $StatementNode = () => $AnalyzerType<StatementNode>('StatementNode', $SyntaxNode());

// export function newStatementNode(
//   indentLevel: Integer,
//   errorNodes: ArrayData<Node> | Nothing,
// ): StatementNode {
//   const node = newSyntaxNode<StatementNode>({
//     $: $StatementNode(),
//     indentLevel,
//     errorNodes,
//   });

//   return node;
// }

// export function constructStatementNode(
//   parentStatement: StatementNode | Nothing,
//   nodes: ArrayData<Node>,
//   indent: TextRange,
//   isFirstStatement: Boolean2,
// ): StatementNode {
//   statementNodeCollapse(analyzer, parentStatement, nodes);

//   // for (const node of nodes.slice(1)) {
//   //   analyzer.diagnosticManager.addPredefinedDiagnostic(node.reference, (x) => x.unexpectedExpression());
//   // }

//   return statementNode(analyzer, parentStatement, nodes, indent, isFirstStatement);
// }

// function format(
//   {formatterManager}: SyntaxAnalyzer,
//   statement: StatementNode,
//   isFirstStatement: Boolean2,
// ): void {
//   const INDENT_SPACE_LENGTH = 2;

//   if (!statement.hiddenNodes || statement.hiddenNodes.isEmpty()) {
//     return;
//   }

//   const lastNlIndex = statement.hiddenNodes.lastIndex((x) => is(x, $NlNode())) ?? -1;

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
//     (x): x is LexicalNode => is(x, $LexicalNode()) && !is(x, $WhitespaceNode()),
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
