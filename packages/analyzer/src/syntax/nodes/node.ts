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
  $Type,
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
    // todo remove parent and aggregate body
    parent?: SyntaxNode | Nothing;
    isHidden?: Boolean2;

    debug(): unknown;
  };

export const $Node = () => $AnalyzerType<Node>('Node');

export type LexicalNode = Node &
  Brand<'Analyzer.LexicalNode'> & {
    text: Text;
  };

export const $LexicalNode = () => $AnalyzerType<LexicalNode>('LexicalNode', $Node());

export function newLexicalNode<T extends Model>($type: $Type<T>, range: TextRange, text: Text): LexicalNode {
  return {
    $: $type,
    text,
    range,

    debug: lexicalDebug,
  };
}

export type SyntaxNode = Node &
  Brand<'Analyzer.SyntaxNode'> & {
    children: ArrayData<Node>;
    semantic?: Semantic | Nothing;
    body?: BodyNode | Nothing;

    semantify(context: SemanticContext): void;
    format(context: FormatterContext): void;
    highlight(context: HighlightContext): void;
  };

export const $SyntaxNode = () => $AnalyzerType<SyntaxNode>('SyntaxNode', $Node());

export function newSyntaxNode<T extends SyntaxNode>(
  params: Omit<T, 'children' | 'range' | 'debug'> & Partial<Pick<T, 'children' | 'range' | 'debug'>>,
): T {
  // todo optimize and simplify it
  const children = newArrayData(
    $Node(),
    Object.entries(params)
      // todo remove 'parent' exception
      .filter(([key]) => key !== 'parent')
      .map(([_, value]) => value)
      .filter((value) => is(value, $Node()) || is(value, $ArrayData<Node>($Node())))
      .flatMap((value) => (is(value, $Node()) ? value : value._items)),
  );

  const first = children.first();
  const last = children.last();
  // todo recheck - first always must be non nullable value
  const range =
    first && last ? newTextRange(first.range.start.clone(), last.range.stop.clone()) : newTextRange();

  const node: T = {
    ...params,
    range,
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
