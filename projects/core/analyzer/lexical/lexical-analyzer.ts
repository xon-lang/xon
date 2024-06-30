import {Array2, nothing, Nothing} from '../../../lib/types';
import {TextPosition} from '../../util/resource/text/text-position';
import {TextResource} from '../../util/resource/text/text-resource';
import {TextResourcePosition, textResourcePosition} from '../../util/resource/text/text-resource-position';
import {LexicalNode} from './node/lexical-node';
import {unknownNodeParse} from './node/unknown/unknown-node-parse';

export type LexicalNodeParseFn = (cursor: TextResourcePosition) => LexicalNode | Nothing;

export interface LexicalAnalyzer extends IterableIterator<LexicalNode> {
  parsers: Array2<LexicalNodeParseFn>;
  resource: TextResource;
  startPosition: TextPosition;
  // todo remove it
  cursor: TextResourcePosition;

  next(): IteratorResult<LexicalNode>;
}

export function createLexicalAnalyzer(
  parsers: Array2<LexicalNodeParseFn>,
  resource: TextResource,
  startPosition: TextPosition,
): LexicalAnalyzer {
  return {
    parsers,
    resource,
    startPosition,
    cursor: textResourcePosition(resource, startPosition),

    next(): IteratorResult<LexicalNode> {
      if (this.cursor.position.index >= this.resource.data.length) {
        return {
          done: true,
          value: nothing,
        };
      }

      const node = this.parsers.findMap((lexer) => lexer(this.cursor)) ?? unknownNodeParse(this.cursor);
      this.cursor.position = node.range.stop;

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
