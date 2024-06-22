import {Array2, Nothing} from '../../../lib/types';
import {TextPosition} from '../../util/resource/text/text-position';
import {TextResource} from '../../util/resource/text/text-resource';
import {TextResourcePosition, textResourcePosition} from '../../util/resource/text/text-resource-position';
import {TokenNode} from './node/token-node';
import {unknownNodeParse} from './node/unknown/unknown-node-parse';

export type LexicalNodeParseFn = (cursor: TextResourcePosition) => TokenNode | Nothing;

export interface LexicalAnalyzer {
  parsers: Array2<LexicalNodeParseFn>;
  resource: TextResource;
  startPosition: TextPosition;
  cursor: TextResourcePosition;

  nextNode(): TokenNode;
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

    nextNode(): TokenNode {
      const node = this.parsers.findMap((lexer) => lexer(this.cursor)) ?? unknownNodeParse(this.cursor);
      this.cursor.position = node.range.stop;

      return node;
    },
  };
}
