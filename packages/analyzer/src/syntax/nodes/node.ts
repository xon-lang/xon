import {$AnalyzerType, FormatterContext, HighlightContext, Semantic, SemanticContext} from '#analyzer';
import {
  $ArrayData,
  $Type,
  ArrayData,
  Boolean2,
  Brand,
  is,
  Model,
  newArrayData,
  newText,
  newTextRange,
  Nothing,
  Text,
  TextRange,
} from '#core';

export type Node = Model &
  Brand<'Analyzer.Node'> & {
    range: TextRange;
    parent?: Node | Nothing;
    children?: ArrayData<Node> | Nothing;
    semantic?: Semantic | Nothing;
    isHidden?: Boolean2;

    debug(): Text;
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
    semantify(context: SemanticContext): void;
    format(context: FormatterContext): void;
    highlight(context: HighlightContext): void;
  };

export const $SyntaxNode = () => $AnalyzerType<SyntaxNode>('SyntaxNode', $Node());

export function newSyntaxNode<T extends Node>(params: Omit<T, 'children' | 'range' | 'debug'>): T {
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
  const range = first ? newTextRange(first!.range.start.clone(), last!.range.stop.clone()) : newTextRange();

  const node: T = {
    range,
    children,
    ...params,

    debug: syntaxDebug,
  } as T;

  children.forEach((x) => (x.parent = node));

  return node;
}

export function lexicalDebug(this: LexicalNode): Text {
  return newText(`(${this.$.name.replace('Node', '')}, '${this.text}')`);
}

export function syntaxDebug(this: SyntaxNode): Text {
  const entries: [string, Node][] = Object.entries(this);

  if (this.children?.some()) {
    const children = newText(
      this.children.map((x) => {
        const entry = entries.find(([, v]) => v === x);
        if (entry) {
          return newText(`${entry[0]}: ${x.debug()}`);
        }

        return x.debug();
      }),
      newText('\n'),
    ).margin(2);

    return newText(`${this.$.name.replace('Node', '')}\n${children}`);
  }

  return newText(`${this.$.name.replace('Node', '')}`);
}
