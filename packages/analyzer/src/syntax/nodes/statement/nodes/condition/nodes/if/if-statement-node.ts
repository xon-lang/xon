import {
  $AnalyzerType,
  $StatementNode,
  diagnoseIfStatementNode,
  FormatterContext,
  HighlightContext,
  IfKeywordNode,
  newSyntaxNode,
  Node,
  SemanticContext,
  StatementNode,
} from '#analyzer';
import {ArrayData, Integer, Nothing} from '#common';
import {Brand} from '#typing';

export type IfStatementNode = StatementNode &
  Brand<'Analyzer.IfStatementNode'> & {
    keyword: IfKeywordNode;
    expression?: Node | Nothing;
  };

export const $IfStatementNode = () => $AnalyzerType<IfStatementNode>('IfStatementNode', $StatementNode());

export function newIfStatementNode(
  indent: Integer,
  keyword: IfKeywordNode,
  expression?: Node | Nothing,
  errorNodes?: ArrayData<Node> | Nothing,
): IfStatementNode {
  return newSyntaxNode<IfStatementNode>({
    $: $IfStatementNode(),
    indent,
    keyword,
    expression,
    errorNodes,

    semantify(context: SemanticContext): void {},
    diagnose: diagnoseIfStatementNode,
    format(context: FormatterContext): void {},
    highlight(context: HighlightContext): void {},
  });
}
