import {$AnalyzerType, FormatterItem, Semantic} from '#analyzer';
import {
  $ArrayData,
  ArrayData,
  Boolean2,
  newArrayData,
  newTextRange,
  nothing,
  Nothing,
  Text,
  TextRange,
} from '#common';
import {AnalyzerDiagnostic} from '#diagnostic';
import {Brand, is, Model} from '#typing';

export type Node = Model &
  Brand<'Analyzer.Node'> & {
    range: TextRange;
    parent?: Node | Nothing;
    children?: ArrayData<Node> | Nothing;
    semantic?: Semantic | Nothing;
    isHidden?: Boolean2;
    hiddenNodes?: ArrayData<Node> | Nothing;
    canBeExpression?: Boolean2 | Nothing;

    diagnose?(): ArrayData<AnalyzerDiagnostic>;
    format?(): ArrayData<FormatterItem>;
  };

export const $Node = () => $AnalyzerType<Node>('Node');

export type LexicalNode = Node &
  Brand<'Analyzer.LexicalNode'> & {
    text: Text;
  };

export const $LexicalNode = () => $AnalyzerType<LexicalNode>('LexicalNode', $Node());

export function newLexicalNode<T extends LexicalNode>(params: T): T {
  return params;
}

export type SyntaxNode = Node & Brand<'Analyzer.SyntaxNode'>;

export const $SyntaxNode = () => $AnalyzerType<SyntaxNode>('SyntaxNode', $Node());

export function newSyntaxNode<T extends Node>(params: Omit<T, 'children' | 'range'>): T {
  // todo optimize and simplify it
  const children = newArrayData(
    Object.entries(params)
      // todo remove 'parent' exception
      .filter(([key]) => key !== 'parent')
      .map(([_, value]) => value)
      .filter((value) => is(value, $Node()) || is(value, $ArrayData<Node>($Node())))
      .flatMap((value) => (is(value, $Node()) ? value : value._items)),
  );

  const {first, last} = children.firstLast();
  // todo recheck - first always must be non nullable value
  const range = first ? newTextRange(first!.range.start.clone(), last!.range.stop.clone()) : newTextRange();
  const node: T = {
    range,
    children,
    hiddenNodes: first?.hiddenNodes,
    ...params,
  } as T;

  if (first) {
    first.hiddenNodes = nothing;
  }

  children.forEach((x) => (x.parent = node));

  return node;
}
