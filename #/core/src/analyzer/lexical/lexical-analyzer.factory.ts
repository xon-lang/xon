import {
  ArrayData,
  Boolean2,
  FunctionData,
  Integer,
  newTextPosition,
  newTextReference,
  Nothing,
  nothing,
  Text,
  TextPosition,
  textRange,
  TextReference,
  TextResource,
} from '#common';
import {LexicalAnalyzer, LexicalNode, LexicalNodeParseFn, NL} from '#core';

export function newLexicalAnalyzer(
  resource: TextResource,
  position: TextPosition,
  parsers: ArrayData<FunctionData<LexicalNodeParseFn>>,
): LexicalAnalyzer {
  return {
    resource,
    position,
    parsers,

    iterator(): IterableIterator<LexicalNode> {
      return lexicalIterator(this, this.parsers);
    },
    textReference(text: Text): TextReference {
      const start = this.position.clone();
      const stop = newTextPosition(
        this.position.index + text.length(),
        this.position.line,
        this.position.column + text.length(),
      );

      const range = textRange(start, stop);

      return newTextReference(this.resource, range);
    },

    textReferenceWithNewLine(text: Text): TextReference {
      let nlCount = this.position.line;
      let columnIndent = this.position.column;

      for (let i = this.position.index; i < this.position.index + text.length(); i++) {
        const char = this.resource.data.at(i);

        if (char?.equals(NL)) {
          nlCount += 1;
          columnIndent = 0;

          continue;
        }

        columnIndent += 1;
      }

      const start = this.position.clone();
      const stop = newTextPosition(this.position.index + text.length(), nlCount, columnIndent);
      const range = textRange(start, stop);

      return newTextReference(this.resource, range);
    },

    hasTextAtIndex(text: Text, index?: Integer | Nothing): Boolean2 {
      return this.resource.data.take(text.length(), index ?? this.position.index).equals(text);
    },
  };
}

function lexicalIterator(
  lexer: LexicalAnalyzer,
  parsers: ArrayData<FunctionData<LexicalNodeParseFn>>,
): IterableIterator<LexicalNode> {
  return {
    next(): IteratorResult<LexicalNode> {
      if (lexer.position.index >= lexer.resource.data.length()) {
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

      lexer.position = node.reference.range.stop;
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
