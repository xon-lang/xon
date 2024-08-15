import {Array2} from '../../../lib/types';
import {LexicalNodeParseFn} from './lexical-analyzer';
import {angleCloseNodeParse} from './node/close/angle-close/angle-close-node-parse';
import {braceCloseNodeParse} from './node/close/brace-close/brace-close-node-parse';
import {bracketCloseNodeParse} from './node/close/bracket-close/bracket-close-node-parse';
import {parenCloseNodeParse} from './node/close/paren-close/paren-close-node-parse';
import {commaNodeParse} from './node/comma/comma-node-parse';
import {commentBlockNodeParse} from './node/comment-block/comment-block-node-parse';
import {commentLineNodeParse} from './node/comment-line/comment-line-node-parse';
import {documentationOpenNodeParse} from './node/documentation-open/documentation-open-node-parse';
import {idNodeParse} from './node/id/id-node-parse';
import {integerContentNodeParse} from './node/integer-content/integer-content-node-parse';
import {joiningNodeParse} from './node/joining/joining-node-parse';
import {nlNodeParse} from './node/nl/nl-node-parse';
import {angleOpenNodeParse} from './node/open/angle-open/angle-open-node-parse';
import {braceOpenNodeParse} from './node/open/brace-open/brace-open-node-parse';
import {bracketOpenNodeParse} from './node/open/bracket-open/bracket-open-node-parse';
import {charOpenNodeParse} from './node/open/char-open/char-open-node-parse';
import {parenOpenNodeParse} from './node/open/paren-open/paren-open-node-parse';
import {stringOpenNodeParse} from './node/open/string-open/string-open-node-parse';
import {operatorNodeParse} from './node/operator/operator-node-parse';
import {whitespaceNodeParse} from './node/whitespace/whitespace-node-parse';

// todo remove all nodes if possible and use single node (e.g. 'TokenNode')
export const codeLexicalParsers: Array2<LexicalNodeParseFn> = [
  parenOpenNodeParse,
  parenCloseNodeParse,
  bracketOpenNodeParse,
  angleOpenNodeParse,

  bracketCloseNodeParse,
  braceOpenNodeParse,
  braceCloseNodeParse,
  angleCloseNodeParse,

  integerContentNodeParse,

  commaNodeParse,

  commentLineNodeParse,
  commentBlockNodeParse,
  whitespaceNodeParse,
  nlNodeParse,
  joiningNodeParse,

  // todo should we add 'documentationOpenNodeParse' in codeAnalyzer instead of documentationAnalyzer ???
  documentationOpenNodeParse,
  stringOpenNodeParse,
  charOpenNodeParse,
  operatorNodeParse,
  idNodeParse,
];
