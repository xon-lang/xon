import {
  $AnalyzerType,
  $SyntaxNode,
  CommaNode,
  FormatterContext,
  HighlightContext,
  newSyntaxNode,
  SemanticContext,
  StatementNode,
  SyntaxNode,
} from '#analyzer';
import {ArrayData, Nothing} from '#common';
import {Brand} from '#typing';

export type GroupItemNode = SyntaxNode &
  Brand<'Analyzer.GroupItemNode'> & {
    statements: ArrayData<StatementNode>;
    comma?: CommaNode | Nothing;
    statement?: StatementNode | Nothing;
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
    format(context: FormatterContext): void {},
    highlight(context: HighlightContext): void {},
  });

  node.statement = statements.first();

  return node;
}

// function format(analyzer: SyntaxAnalyzer, node: ItemNode): void {
//   if (node.comma) {
//     analyzer.formatterManager.formatChildNode(node.comma, false);
//   }
// }
