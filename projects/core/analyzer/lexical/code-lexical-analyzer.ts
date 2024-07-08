import {Array2} from '../../../lib/types';
import {TextPosition} from '../../util/resource/text/text-position';
import {TextResource} from '../../util/resource/text/text-resource';
import {createLexicalAnalyzer, LexicalAnalyzer, LexicalNodeParseFn} from './lexical-analyzer';
import {charNodeParse} from './node/char/char-node-parse';
import {braceCloseNodeParse} from './node/close/brace-close/brace-close-node-parse';
import {bracketCloseNodeParse} from './node/close/bracket-close/bracket-close-node-parse';
import {parenCloseNodeParse} from './node/close/paren-close/paren-close-node-parse';
import {commaNodeParse} from './node/comma/comma-node-parse';
import {commentBlockNodeParse} from './node/comment-block/comment-block-node-parse';
import {commentLineNodeParse} from './node/comment-line/comment-line-node-parse';
import {documentationOpenNodeParse} from './node/documentation-open/documentation-open-node-parse';
import {idNodeParse} from './node/id/id-node-parse';
import {integerNodeParse} from './node/integer/integer-node-parse';
import {joiningNodeParse} from './node/joining/joining-node-parse';
import {nlNodeParse} from './node/nl/nl-node-parse';
import {braceOpenNodeParse} from './node/open/brace-open/brace-open-node-parse';
import {bracketOpenNodeParse} from './node/open/bracket-open/bracket-open-node-parse';
import {parenOpenNodeParse} from './node/open/paren-open/paren-open-node-parse';
import {operatorNodeParse} from './node/operator/operator-node-parse';
import {stringNodeParse} from './node/string/string-node-parse';
import {whitespaceNodeParse} from './node/whitespace/whitespace-node-parse';

const parsers: Array2<LexicalNodeParseFn> = [
  parenOpenNodeParse,
  parenCloseNodeParse,
  bracketOpenNodeParse,

  bracketCloseNodeParse,
  braceOpenNodeParse,
  braceCloseNodeParse,

  commaNodeParse,

  commentLineNodeParse,
  commentBlockNodeParse,
  whitespaceNodeParse,
  nlNodeParse,
  joiningNodeParse,

  integerNodeParse,
  charNodeParse,
  stringNodeParse,
  // todo should we add 'documentationOpenNodeParse' in codeAnalyzer instead of documentationAnalyzer ???
  documentationOpenNodeParse,
  operatorNodeParse,
  idNodeParse,
];

export function codeLexicalAnalyzer(resource: TextResource, startPosition: TextPosition): LexicalAnalyzer {
  return createLexicalAnalyzer(parsers, resource, startPosition);
}
