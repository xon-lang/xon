import {
  $AnalyzerType,
  $SyntaxNode,
  FormatterContext,
  HighlightContext,
  Node,
  SemanticContext,
  SyntaxNode,
} from '#analyzer';
import {ArrayData, Brand, newTextRange, nothing, Nothing} from '#core';

export type ModuleNode = SyntaxNode &
  Brand<'Analyzer.ModuleNode'> & {
    parent: Nothing;
    children: ArrayData<SyntaxNode>;
  };

export const $ModuleNode = () => $AnalyzerType<ModuleNode>('ModuleNode', $SyntaxNode());

export function newModuleNode(statements: ArrayData<SyntaxNode>): ModuleNode {
  return {
    $: $ModuleNode(),
    parent: nothing,
    range: newTextRange(statements.first()?.range.start, statements.last()?.range.stop),
    children: statements,

    debug() {
      return {
        [this.$.name]: this.children.map((x) => x.debug()).toNativeArray(),
      };
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
