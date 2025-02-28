import {
  $AnalyzerType,
  $StatementNode,
  AngleGroupNode,
  HighlightContext,
  HighlightTokenType,
  newSyntaxNode,
  Node,
  StatementNode,
  TypeKeywordNode,
} from '#analyzer';
import {ArrayData, Integer, Nothing} from '#common';
import {Brand} from '#typing';

export type TypeDeclarationNode = StatementNode &
  Brand<'Analyzer.TypeDeclarationNode'> & {
    keyword: TypeKeywordNode;
    id?: Node | Nothing;
    parameters?: AngleGroupNode | Nothing;
  };

export const $TypeDeclarationNode = () =>
  $AnalyzerType<TypeDeclarationNode>('TypeDeclarationNode', $StatementNode());

export function newTypeDeclarationNode(
  indent: Integer,
  keyword: TypeKeywordNode,
  errorNodes?: ArrayData<Node> | Nothing,
): TypeDeclarationNode {
  return newSyntaxNode<TypeDeclarationNode>({
    $: $TypeDeclarationNode(),
    indent,
    keyword,
    errorNodes,

    highlight(context: HighlightContext): void {
      context.add(HighlightTokenType.StorageType, this.keyword.range);
    },
  });
}
