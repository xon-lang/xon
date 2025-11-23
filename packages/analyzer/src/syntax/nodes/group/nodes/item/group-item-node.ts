import {
  $AnalyzerType,
  $SyntaxNode,
  CommaNode,
  FormatterContext,
  HighlightContext,
  newSyntaxNode,
  Node,
  SemanticContext,
  SyntaxNode,
} from '#analyzer';
import {ArrayData, Brand, Nothing} from '#core';

export type GroupItemNode = SyntaxNode &
  Brand<'Analyzer.GroupItemNode'> & {
    nodes: ArrayData<Node>;
    comma?: CommaNode | Nothing;
    // todo remove node or nodes
    node?: Node | Nothing;
  };

export const $GroupItemNode = () => $AnalyzerType<GroupItemNode>('GroupItemNode', $SyntaxNode());

export function newGroupItemNode(statements: ArrayData<Node>, comma?: CommaNode | Nothing): GroupItemNode {
  const node: GroupItemNode = newSyntaxNode({
    $: $GroupItemNode(),
    nodes: statements,
    comma,

    semantify(context: SemanticContext): void {},
    format(context: FormatterContext): void {},
    highlight(context: HighlightContext): void {},
  });

  node.node = statements.first();

  return node;
}

// function format(analyzer: SyntaxAnalyzer, node: ItemNode): void {
//   if (node.comma) {
//     analyzer.formatterManager.formatChildNode(node.comma, false);
//   }
// }
