import {$Node, analyzerPackageType, Semantic} from '#analyzer';
import {
  $ArrayData,
  ArrayData,
  Boolean2,
  CharStream,
  newArrayData,
  newText,
  newTextRange,
  Nothing,
  Text,
  TextRange,
} from '#common';
import {Brand, is, Model} from '#typing';

export type LexicalNode = Model & {
  text: Text;
  range: TextRange;
};

export const $LexicalNode = analyzerPackageType<LexicalNode>('LexicalNode', $Node);

// --------------------------------------------------------

export type Node2 = Model &
  Brand<'Analyzer.Node2'> & {
    range: TextRange;
    parent?: Node2 | Nothing;
    semantic?: Semantic | Nothing;
    isHidden?: Boolean2;
    hiddenNodes?: ArrayData<Node2> | Nothing;
  };

export const $Node2 = analyzerPackageType<Node2>('Node2');

export type LexicalNode2 = Node2 &
  Brand<'Analyzer.LexicalNode2'> & {
    text: Text;
  };

export const $LexicalNode2 = analyzerPackageType<LexicalNode2>('LexicalNode2', $Node2);

export type SyntaxNode2 = Node2 &
  Brand<'Analyzer.SyntaxNode2'> & {
    children: ArrayData<Node2>;
  };

export const $SyntaxNode2 = analyzerPackageType<SyntaxNode2>('SyntaxNode2');

export function newSyntaxNode<T extends SyntaxNode2>(params: Omit<T, 'children' | 'range'>): T {
  const children = newArrayData(
    Object.values(params)
      .filter((x) => is(x, $Node2) || is(x, $ArrayData<Node2>($Node2)))
      .flatMap((x) => (is(x, $Node2) ? x : x._items)),
  );

  const range = rangeFromNodes2(children);

  const node: T = {
    range,
    children,
    ...params,
    // todo remove 'as T'
  } as T;

  children.forEach((x) => (x.parent = node));

  return node;
}

export function textFromNodes2(nodes: ArrayData<LexicalNode2>): Text {
  return newText(nodes.map((x) => x.text));
}

export function rangeFromNodes2(nodes: ArrayData<Node2>): TextRange {
  const {first, last} = nodes.firstLast()!;

  if (!first || !last) {
    return newTextRange();
  }

  return newTextRange(first.range.start.clone(), last.range.stop.clone());
}

export type NodeParserFunction<T extends Node2 = Node2> = (source: CharStream) => T | Nothing;

export function parsersToNodes<T extends Node2>(
  source: CharStream,
  parsers: ArrayData<NodeParserFunction<T>>,
): ArrayData<T> {
  const nodes = newArrayData<T>();

  while (true) {
    const node = parsers.firstMap((parse) => parse(source));

    if (!node) {
      return nodes;
    }

    nodes.addLastItem(node);
  }
}
