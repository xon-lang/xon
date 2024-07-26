import {Array2, Boolean2, Integer, nothing, Nothing, String2} from '../../../lib/types';
import {TextData} from '../../util/data/text-data';
import {textPosition, TextPosition, zeroPosition} from '../../util/resource/text/text-position';
import {TextRange, textRange} from '../../util/resource/text/text-range';
import {TextResource} from '../../util/resource/text/text-resource';
import {NL} from './lexical-analyzer-config';
import {LexicalNode} from './node/lexical-node';
import {unknownNodeParse} from './node/unknown/unknown-node-parse';

export type LexicalNodeParseFn = (analyzer: LexicalAnalyzer) => LexicalNode | Nothing;

export interface LexicalAnalyzer {
  resource: TextResource;
  position: TextPosition;

  iterator(parsers: Array2<LexicalNodeParseFn>): IterableIterator<LexicalNode>;

  getRange(length: Integer): TextRange;
  getRange(text: TextData): TextRange;
  getRangeWithNL(length: Integer): TextRange;
  getRangeWithNL(text: TextData): TextRange;
  checkTextAtIndex(text: String2): Boolean2;
  checkTextAtIndex(text: String2, index: Integer | Nothing): Boolean2;

  checkTextsAtIndex(text: Array2<String2>): String2 | Nothing;
  checkTextsAtIndex(text: Array2<String2>, index: Integer): String2 | Nothing;
}

export function createLexicalAnalyzer(
  resource: TextResource,
  position: TextPosition = zeroPosition(),
): LexicalAnalyzer {
  return {
    resource,
    position,

    iterator(parsers: Array2<LexicalNodeParseFn>): IterableIterator<LexicalNode> {
      return iterator(this, parsers);
    },

    getRange(lengthOrText: Integer | TextData): TextRange {
      if (typeof lengthOrText === 'number') {
        return textRange(
          textPosition(this.position.index, this.position.line, this.position.column),
          textPosition(
            this.position.index + lengthOrText,
            this.position.line,
            this.position.column + lengthOrText,
          ),
        );
      }

      return this.getRange(lengthOrText.length());
    },

    getRangeWithNL(lengthOrText: Integer | TextData): TextRange {
      if (typeof lengthOrText !== 'number') {
        return this.getRangeWithNL(lengthOrText.length());
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

      return textRange(
        textPosition(this.position.index, this.position.line, this.position.column),
        textPosition(this.position.index + lengthOrText, nlCount, columnIndent),
      );
    },

    checkTextAtIndex(text: String2, index?: Integer): Boolean2 {
      return this.resource.data.take(text.length, index ?? this.position.index).equals(text);
    },

    checkTextsAtIndex(texts: Array2<String2>, index?: Integer): String2 | Nothing {
      const startIndex = index ?? this.position.index;

      return texts.find((x) => this.resource.data.take(x.length, startIndex).equals(x));
    },
  };
}

function iterator(
  lexer: LexicalAnalyzer,
  parsers: Array2<LexicalNodeParseFn>,
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
      lexer.position = node.range.stop;

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
