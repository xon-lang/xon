import {$Node, analyzerPackageType, Semantic} from '#analyzer';
import {ArrayData, Boolean2, newText, Nothing, Text, textRange, TextRange, zeroRange} from '#common';
import {Brand, Model} from '#typing';

export type LexicalNode = Model & {
  text: Text;
  range: TextRange;
};

export const $LexicalNode = analyzerPackageType<LexicalNode>('LexicalNode', $Node);

// --------------------------------------------------------

export type Node2 = Model &
  Brand<'Analyzer.Node2'> & {
    // todo remove 'isHidden' or move to 'syntax node'
    // isHidden: Boolean2;
    range: TextRange;
    isExpression?: Boolean2;
    parent?: Node2 | Nothing;
    semantic?: Semantic | Nothing;
  };

export const $Node2 = analyzerPackageType<Node2>('Node2', $Node);

export type LexicalNode2 = Node2 &
  Brand<'Analyzer.LexicalNode2'> & {
    text: Text;
  };

export const $LexicalNode2 = analyzerPackageType<LexicalNode2>('LexicalNode2', $Node);

export type SyntaxNode2 = Node2 &
  Brand<'Analyzer.SyntaxNode2'> & {
    // hiddenNodes?: ArrayData<Node> | Nothing;
    children: ArrayData<Node2>;
  };

export const $SyntaxNode2 = analyzerPackageType<SyntaxNode2>('SyntaxNode2');

export function textFromNodes2(nodes: ArrayData<LexicalNode2>): Text {
  return newText(nodes.map((x) => x.text));
}

export function rangeFromNodes2(nodes: ArrayData<Node2>): TextRange {
  const {first, last} = nodes.firstLast()!;

  if (!first || !last) {
    return zeroRange();
  }

  return textRange(first.range.start.clone(), last.range.stop.clone());
}
