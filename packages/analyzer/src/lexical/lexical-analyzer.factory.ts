import {LexicalAnalyzer, LexicalNode, LexicalNodeParseFn, NL} from '#analyzer';
import {
  ArrayData,
  Boolean2,
  FunctionData,
  Integer,
  newTextPosition,
  newTextRange,
  Nothing,
  nothing,
  Text,
  TextPosition,
  TextRange,
  TextResource,
} from '#common';

export function newLexicalAnalyzer(
  resource: TextResource,
  position: TextPosition = newTextPosition(),
): LexicalAnalyzer {
  return {
    resource,
    position,

    iterator(parsers: ArrayData<FunctionData<LexicalNodeParseFn>>): IterableIterator<LexicalNode> {
      return lexicalIterator(this, parsers);
    },
  };
}

export function lexicalTextRange(text: Text, startPosition: TextPosition): TextRange {
  const start = startPosition.clone();
  const stop = newTextPosition(
    startPosition.index + text.count(),
    startPosition.line,
    startPosition.column + text.count(),
  );

  return newTextRange(start, stop);
}

export function lexicalTextRangeWithNewLine(text: Text, startPosition: TextPosition): TextRange {
  const index = startPosition.index + text.count();
  let line = startPosition.line;
  let column = startPosition.column;

  for (const char of text) {
    if (NL.equals(char)) {
      line += 1;
      column = 0;

      continue;
    }

    column += 1;
  }

  const start = startPosition.clone();
  const stop = newTextPosition(index, line, column);

  return newTextRange(start, stop);
}

export function lexicalHasTextAtIndex(text: Text, index?: Integer | Nothing): Boolean2 {
  return this.resource.data.take(text.count(), index ?? this.position.index).equals(text);
}

function lexicalIterator(
  lexer: LexicalAnalyzer,
  parsers: ArrayData<FunctionData<LexicalNodeParseFn>>,
): IterableIterator<LexicalNode> {
  return {
    next(): IteratorResult<LexicalNode> {
      if (lexer.position.index >= lexer.resource.data.count()) {
        return {
          done: true,
          value: nothing,
        };
      }

      const node = parsers.findMap((parse) => parse.invoke(lexer));

      if (!node) {
        return {
          done: true,
          value: nothing,
        };
      }

      lexer.position = node.range.stop;
      lexer.previousNode = node;

      if (!node.isHidden) {
        lexer.previousNonHiddenNode = node;
      }

      return {
        done: false,
        value: node,
      };
    },

    [Symbol.iterator](): IterableIterator<LexicalNode> {
      return this;
    },
  };
}
