import {
  $AnalyzerType,
  BodyNode,
  FormatterContext,
  HighlightContext,
  Semantic,
  SemanticContext,
} from '#analyzer';
import {
  $ArrayData,
  ArrayData,
  Boolean2,
  Brand,
  is,
  Model,
  newArrayData,
  newTextRange,
  Nothing,
  Text,
  TextRange,
} from '#core';

export type Node = Model &
  Brand<'Analyzer.Node'> & {
    range: TextRange;

    debug(): unknown;
  };

export const $Node = () => $AnalyzerType<Node>('Node');

export type LexicalNode = Node &
  Brand<'Analyzer.LexicalNode'> & {
    text: Text;
  };

export const $LexicalNode = () => $AnalyzerType<LexicalNode>('LexicalNode', $Node());

export function newLexicalNode(range: TextRange, text: Text): LexicalNode {
  return {
    $: $LexicalNode(),
    text,
    range,

    debug: lexicalDebug,
  };
}

export type SyntaxNode = Node &
  Brand<'Analyzer.SyntaxNode'> & {
    parent?: SyntaxNode | Nothing;
    children?: ArrayData<SyntaxNode>;
    body?: BodyNode | Nothing;
    semantic?: Semantic | Nothing;
    isHidden?: Boolean2;

    semantify?(context: SemanticContext): void;
    format?(context: FormatterContext): void;
    highlight?(context: HighlightContext): void;
  };

export const $SyntaxNode = () => $AnalyzerType<SyntaxNode>('SyntaxNode', $Node());

export function newSyntaxNode<T extends SyntaxNode>(
  params: Omit<T, 'children' | 'range' | 'debug'> & Partial<Pick<T, 'children' | 'range' | 'debug'>>,
): T {
  // todo optimize and simplify it
  const children = newArrayData(
    $SyntaxNode(),
    Object.entries(params)
      // todo remove 'parent' exception
      .filter(([key]) => key !== 'parent')
      .map(([_, value]) => value)
      .filter((value) => is(value, $SyntaxNode()) || is(value, $ArrayData<SyntaxNode>($SyntaxNode())))
      .flatMap((value) => (is(value, $SyntaxNode()) ? value : value._items)),
  );

  const first = children.first();
  const last = children.last();
  // todo recheck - first always must be non nullable value
  const range =
    first && last ? newTextRange(first.range.start.clone(), last.range.stop.clone()) : newTextRange();

  const node: T = {
    ...params,
    range: params.range ?? range,
    children,

    debug: syntaxDebug,
  } as T;

  children.forEach((x) => (x.parent = node));

  return node;
}

export function lexicalDebug(this: LexicalNode): string {
  return `${this.$.name}(${this.text})`;
}

export function syntaxDebug(this: SyntaxNode): object {
  const entries: [string, Node][] = Object.entries(this);

  if (this.children?.some()) {
    const children = this.children.reduce((o, x) => {
      const entry = entries.find(([, v]) => v === x);

      if (entry) {
        o[entry[0]] = x.debug();
      }

      return o;
    }, {} as Record<string, unknown>);

    return {[this.$.name]: children};
  }

  return {[this.$.name]: null};
}

export function nodesRange(...tokens: (Node | Nothing)[]): TextRange {
  const start = tokens.find((x) => x)?.range.start.clone();
  const stop = tokens.findLast((x) => x)?.range.stop.clone();

  return newTextRange(start, stop);
}
