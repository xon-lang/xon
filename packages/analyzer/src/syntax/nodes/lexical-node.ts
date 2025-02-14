import {$Node, AnalyzerContext, analyzerPackageType, Node} from '#analyzer';
import {
  $ArrayData,
  ArrayData,
  newArrayData,
  newText,
  newTextRange,
  nothing,
  Nothing,
  Text,
  TextRange,
} from '#common';
import {Brand, is} from '#typing';

export type LexicalNode = Node &
  Brand<'Analyzer.LexicalNode'> & {
    text: Text;
  };

export const LexicalNode = analyzerPackageType<LexicalNode>('LexicalNode', $Node);

export function newLexicalNode<T extends LexicalNode>(params: T): T {
  return params;
}

export type SyntaxNode = Node & Brand<'Analyzer.SyntaxNode'>;

export const SyntaxNode = analyzerPackageType<SyntaxNode>('SyntaxNode', $Node);

export function newSyntaxNode<T extends Node>(
  params: Omit<T, 'children' | 'range'> | Record<string, unknown>,
): T {
  // todo optimize and simplify it
  const children = newArrayData(
    Object.entries(params)
      // todo remove 'parent' exception
      .filter(([key]) => key !== 'parent')
      .map(([_, value]) => value)
      .filter((value) => is(value, $Node) || is(value, $ArrayData<Node>($Node)))
      .flatMap((value) => (is(value, $Node) ? value : value._items)),
  );

  const range = rangeFromNodes2(children);
  const firstChild = children.first();

  const node: T = {
    range,
    children,
    hiddenNodes: firstChild?.hiddenNodes,
    ...params,
    // todo remove 'as T'
  } as T;

  if (firstChild) {
    firstChild.hiddenNodes = nothing;
  }

  children.forEach((x) => (x.parent = node));

  return node;
}

export function textFromNodes2(nodes: ArrayData<LexicalNode>): Text {
  return newText(nodes.map((x) => x.text));
}

export function rangeFromNodes2(nodes: ArrayData<Node>): TextRange {
  const {first, last} = nodes.firstLast()!;

  if (!first || !last) {
    return newTextRange();
  }

  return newTextRange(first.range.start.clone(), last.range.stop.clone());
}

export type NodeParserFunction<T extends Node = Node> = (context: AnalyzerContext) => T | Nothing;

export function parsersToNodes<T extends Node>(
  context: AnalyzerContext,
  parsers: ArrayData<NodeParserFunction<T>>,
): ArrayData<T> {
  const nodes = newArrayData<T>();

  while (true) {
    const node = parsers.firstMap((parse) => parse(context));

    if (!node) {
      return nodes;
    }

    nodes.addLastItem(node);
  }
}

export function parsersToNodesCleanupHidden<T extends Node>(
  context: AnalyzerContext,
  parsers: ArrayData<NodeParserFunction<T>>,
): {
  nodes: ArrayData<T>;
  afterHiddenNodes: ArrayData<Node>;
} {
  let hiddenNodes = newArrayData<Node>();
  const nodes = newArrayData<T>();

  while (true) {
    const node = parsers.firstMap((parse) => parse(context));

    if (!node) {
      return {nodes, afterHiddenNodes: hiddenNodes};
    }

    if (node.isHidden) {
      hiddenNodes.addLastItem(node);
    } else {
      node.hiddenNodes = hiddenNodes;
      hiddenNodes = newArrayData();
      nodes.addLastItem(node);
    }
  }
}
