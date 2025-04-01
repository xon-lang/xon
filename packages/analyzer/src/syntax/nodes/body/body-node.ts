import {
  $AnalyzerType,
  $SyntaxNode,
  DiagnosticContext,
  FormatterContext,
  HighlightContext,
  SemanticContext,
  StatementNode,
  SyntaxNode,
} from '#analyzer';
import {ArrayData, newArrayData, newTextRange, Nothing} from '#common';
import {Brand} from '#typing';

export type BodyNode = SyntaxNode &
  Brand<'Analyzer.BodyNode'> & {
    parent?: StatementNode | Nothing;
    children: ArrayData<StatementNode>;

    addStatement(statement: StatementNode): void;
  };

export const $BodyNode = () => $AnalyzerType<BodyNode>('BodyNode', $SyntaxNode());

export function newBodyNode(): BodyNode {
  return {
    $: $BodyNode(),
    range: newTextRange(),
    children: newArrayData(),

    addStatement(statement: StatementNode): void {
      statement.parent = this;

      if (this.parent) {
        this.parent.range.stop = statement.range.stop;
      }

      if (this.children.isEmpty()) {
        this.range.start = statement.range.start;
      }

      this.range.stop = statement.range.stop;
      this.children.addLastItem(statement);
    },

    semantify(context: SemanticContext): void {},
    diagnose(context: DiagnosticContext): void {},
    format(context: FormatterContext): void {},
    highlight(context: HighlightContext): void {},
  };
}
