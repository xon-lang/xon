import {Array2} from '../../../lib/types';
import {TextPosition} from '../../util/resource/text/text-position';
import {TextResource} from '../../util/resource/text/text-resource';
import {TextResourcePosition, textResourcePosition} from '../../util/resource/text/text-resource-position';
import {TokenParseFn} from '../syntax-parser';
import {TokenNode} from './node/token-node';
import {unknownNodeParse} from './node/unknown/unknown-node-parse';

export interface LexicalAnalyzer {
  tokenParsers: Array2<TokenParseFn>;
  resource: TextResource;
  startPosition: TextPosition;
  cursor: TextResourcePosition;

  nextNode(): TokenNode;
}

export function createLexicalAnalyzer(
  tokenParsers: Array2<TokenParseFn>,
  resource: TextResource,
  startPosition: TextPosition,
): LexicalAnalyzer {
  return {
    tokenParsers,
    resource,
    startPosition,
    cursor: textResourcePosition(resource, startPosition),

    nextNode(): TokenNode {
      const node = this.tokenParsers.findMap((lexer) => lexer(this.cursor)) ?? unknownNodeParse(this.cursor);
      this.cursor.position = node.range.stop;

      return node;
    },
  };
}
