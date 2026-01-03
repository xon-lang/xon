import {
  $AnalyzerType,
  $Node,
  $SyntaxNode,
  FormatterContext,
  HighlightContext,
  Node,
  SemanticContext,
  SyntaxNode,
} from '#analyzer';
import {ArrayData, Brand, is, newArrayData, newText, newTextRange, Text} from '#core';

export type BodyNode = SyntaxNode &
  Brand<'Analyzer.BodyNode'> & {
    children: ArrayData<SyntaxNode>;

    addNode(node: Node): void;
  };

export const $BodyNode = () => $AnalyzerType<BodyNode>('BodyNode', $SyntaxNode());

export function newBodyNode(): BodyNode {
  return {
    $: $BodyNode(),
    range: newTextRange(),
    children: newArrayData($Node()),

    addNode(node: SyntaxNode): void {
      node.parent = this;

      if (!this.children || this.children?.isEmpty()) {
        this.range.start = node.range.start;
      }

      if (this.parent) {
        this.parent.range.stop = node.range.stop;
      }

      this.range.stop = node.range.stop;
      this.children?.addLastItem(node);
    },

    debug() {
      return {
        [this.$.name]: this.children?.map((x) => x.debug()).toNativeArray(),
      };
    },

    getText(): Text {
      this._text ??= newText(this.children.map((x) => x.getText()));

      return this._text;
    },

    semantify(context: SemanticContext): void {
      // todo fix '?? []'
      for (const statement of this.children ?? []) {
        if (is(statement, $SyntaxNode())) {
          statement.semantify(context);
        }
      }
    },

    format(context: FormatterContext): void {},
    highlight(context: HighlightContext): void {},
  };
}
