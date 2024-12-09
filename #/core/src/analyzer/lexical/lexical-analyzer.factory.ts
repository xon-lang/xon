import {
  $Text,
  Boolean2,
  Integer,
  newTextPosition,
  nothing,
  Text,
  TextPosition,
  textRange,
  TextReference,
  TextResource,
  textResourceRange,
} from '#common';
import {LexicalAnalyzer, LexicalNode, LexicalNodeParseFn, NL, unknownNodeParse} from '#core';
import {is} from '#typing';

export function newLexicalAnalyzer(
  resource: TextResource,
  position: TextPosition,
  parsers: LexicalNodeParseFn[],
): LexicalAnalyzer {
  return {
    resource,
    position,
    parsers,

    iterator(): IterableIterator<LexicalNode> {
      return parsersIterator(this, parsers);
    },

    getResourceRange(lengthOrText: Integer | Text): TextReference {
      if (is(lengthOrText, $Text)) {
        return this.getResourceRange(lengthOrText.length());
      }

      const range = textRange(
        newTextPosition(this.position.index, this.position.line, this.position.column),
        newTextPosition(
          this.position.index + lengthOrText,
          this.position.line,
          this.position.column + lengthOrText,
        ),
      );

      return textResourceRange(this.resource, range);
    },

    getResourceRangeWithNL(lengthOrText: Integer | Text): TextReference {
      if (typeof lengthOrText !== 'number') {
        return this.getResourceRangeWithNL(lengthOrText.length());
      }

      let nlCount = this.position.line;
      let columnIndent = this.position.column;

      for (let i = this.position.index; i < this.position.index + lengthOrText; i++) {
        const char = this.resource.data.at(i);

        if (char?.equals(NL)) {
          nlCount += 1;
          columnIndent = 0;

          continue;
        }

        columnIndent += 1;
      }

      const range = textRange(
        newTextPosition(this.position.index, this.position.line, this.position.column),
        newTextPosition(this.position.index + lengthOrText, nlCount, columnIndent),
      );

      return textResourceRange(this.resource, range);
    },

    checkTextAtIndex(text: Text, index?: Integer): Boolean2 {
      return this.resource.data.take(text.length(), index ?? this.position.index).equals(text);
    },

    // checkTextsAtIndex(texts: String2[], index?: Integer): String2 | Nothing {
    //   const startIndex = index ?? this.position.index;

    //   return texts.find((x) => this.resource.data.take(x.length, startIndex).equals(x));
    // },
  };
}

function parsersIterator(
  lexer: LexicalAnalyzer,
  parsers: LexicalNodeParseFn[],
): IterableIterator<LexicalNode> {
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
