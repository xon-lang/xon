import {
  $AnalyzerType,
  $SyntaxNode,
  FormatterContext,
  HighlightContext,
  SemanticContext,
  StatementNode,
  SyntaxNode,
} from '#analyzer';
import {ArrayData, newTextRange, nothing, Nothing} from '#common';
import {Brand} from '#typing';

export type ModuleNode = SyntaxNode &
  Brand<'Analyzer.ModuleNode'> & {
    parent: Nothing;
    children: ArrayData<StatementNode>;
  };

export const $ModuleNode = () => $AnalyzerType<ModuleNode>('ModuleNode', $SyntaxNode());

export function newModuleNode(statements: ArrayData<StatementNode>): ModuleNode {
  return {
    $: $ModuleNode(),
    parent: nothing,
    range: newTextRange(statements.first()?.range.start, statements.last()?.range.stop),
    children: statements,

    semantify(context: SemanticContext): void {
      for (const statement of this.children) {
        statement.semantify(context);
      }
    },

    format(context: FormatterContext): void {},
    highlight(context: HighlightContext): void {},
  };
}
