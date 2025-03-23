import {
  $AnalyzerType,
  $ExpressionStatementNode,
  $SyntaxNode,
  CommaNode,
  DiagnosticContext,
  ExpressionNode,
  FormatterContext,
  HighlightContext,
  newSyntaxNode,
  SemanticContext,
  StatementNode,
  SyntaxNode,
} from '#analyzer';
import {ArrayData, Nothing} from '#common';
import {Brand, is} from '#typing';

export type GroupItemNode = SyntaxNode &
  Brand<'Analyzer.GroupItemNode'> & {
    statements: ArrayData<StatementNode>;
    comma?: CommaNode | Nothing;
    expression?: ExpressionNode | Nothing;
  };

export const $GroupItemNode = () => $AnalyzerType<GroupItemNode>('GroupItemNode', $SyntaxNode());

export function newItemNode(
  statements: ArrayData<StatementNode>,
  comma?: CommaNode | Nothing,
): GroupItemNode {
  const node: GroupItemNode = newSyntaxNode({
    $: $GroupItemNode(),
    statements,
    comma,

    semantify(context: SemanticContext): void {},
    diagnose(context: DiagnosticContext): void {},
    format(context: FormatterContext): void {},
    highlight(context: HighlightContext): void {},
  });
  const firstStatement = statements.first();

  if (is(firstStatement, $ExpressionStatementNode())) {
    node.expression = firstStatement.expression;
  }

  return node;
}

// function format(analyzer: SyntaxAnalyzer, node: ItemNode): void {
//   if (node.comma) {
//     analyzer.formatterManager.formatChildNode(node.comma, false);
//   }
// }
