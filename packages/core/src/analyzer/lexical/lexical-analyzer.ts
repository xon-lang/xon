import {Boolean2, Integer, Nothing, nothing, String2} from '#common';
import {
  LexicalNode,
  NL,
  TextData,
  TextPosition,
  textPosition,
  textRange,
  TextResource,
  TextResourceRange,
  textResourceRange,
  unknownNodeParse,
  zeroPosition,
} from '#core';

export type LexicalNodeParseFn = (analyzer: LexicalAnalyzer) => LexicalNode | Nothing;

export interface LexicalAnalyzer {
  resource: TextResource;
  position: TextPosition;
  previousNode?: LexicalNode | Nothing;
  previousNonHiddenNode?: LexicalNode | Nothing;

  iterator(parsers: LexicalNodeParseFn[]): IterableIterator<LexicalNode>;

  getResourceRange(length: Integer): TextResourceRange;
  getResourceRange(text: TextData): TextResourceRange;
  getResourceRangeWithNL(length: Integer): TextResourceRange;
  getResourceRangeWithNL(text: TextData): TextResourceRange;
  checkTextAtIndex(text: String2): Boolean2;
  checkTextAtIndex(text: String2, index: Integer | Nothing): Boolean2;

  checkTextsAtIndex(text: String2[]): String2 | Nothing;
  checkTextsAtIndex(text: String2[], index: Integer): String2 | Nothing;
}

export function createLexicalAnalyzer(
  resource: TextResource,
  position: TextPosition = zeroPosition(),
): LexicalAnalyzer {
  return {
    resource,
    position,

    iterator(parsers: LexicalNodeParseFn[]): IterableIterator<LexicalNode> {
      return parsersIterator(this, parsers);
    },

    getResourceRange(lengthOrText: Integer | TextData): TextResourceRange {
      if (typeof lengthOrText === 'number') {
        const range = textRange(
          textPosition(this.position.index, this.position.line, this.position.column),
          textPosition(
            this.position.index + lengthOrText,
            this.position.line,
            this.position.column + lengthOrText,
          ),
        );

        return textResourceRange(this.resource, range);
      }

      return this.getResourceRange(lengthOrText.length());
    },

    getResourceRangeWithNL(lengthOrText: Integer | TextData): TextResourceRange {
      if (typeof lengthOrText !== 'number') {
        return this.getResourceRangeWithNL(lengthOrText.length());
      }

      let nlCount = this.position.line;
      let columnIndent = this.position.column;

      for (let i = this.position.index; i < this.position.index + lengthOrText; i++) {
        const char = this.resource.data.characters[i];

        if (char === NL) {
          nlCount += 1;
          columnIndent = 0;

          continue;
        }

        columnIndent += 1;
      }

      const range = textRange(
        textPosition(this.position.index, this.position.line, this.position.column),
        textPosition(this.position.index + lengthOrText, nlCount, columnIndent),
      );

      return textResourceRange(this.resource, range);
    },

    checkTextAtIndex(text: String2, index?: Integer): Boolean2 {
      return this.resource.data.take(text.length, index ?? this.position.index).equals(text);
    },

    checkTextsAtIndex(texts: String2[], index?: Integer): String2 | Nothing {
      const startIndex = index ?? this.position.index;

      return texts.find((x) => this.resource.data.take(x.length, startIndex).equals(x));
    },
  };
}

function parsersIterator(lexer: LexicalAnalyzer, parsers: LexicalNodeParseFn[]): IterableIterator<LexicalNode> {
  return {
    next(): IteratorResult<LexicalNode> {
      if (lexer.position.index >= lexer.resource.data.length()) {
        return {
          done: true,
          value: nothing,
        };
      }

      const node = parsers.findMap((parse) => parse(lexer)) ?? unknownNodeParse(lexer);
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
