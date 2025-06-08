import {
  $AnalyzerType,
  $SyntaxNode,
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

      if (this.children.isEmpty()) {
        this.range.start = statement.hiddenNodes?.first()?.range.start ?? statement.range.start;
      }

      if (this.parent) {
        this.parent.range.stop = statement.range.stop;
      }

      this.range.stop = statement.range.stop;
      this.children.addLastItem(statement);
    },

    semantify(context: SemanticContext): void {
      for (const statement of this.children) {
        statement.semantify(context);
      }
    },
    format(context: FormatterContext): void {},
    highlight(context: HighlightContext): void {},
  };
}
