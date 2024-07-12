import {Array2} from '../../../lib/types';
import {LexicalNodeParseFn} from './lexical-analyzer';
import {charContentNodeParse} from './node/char-content/char-content-node-parse';
import {charCloseNodeParse} from './node/close/char-close/char-close-node-parse';

export const charLexicalParsers: Array2<LexicalNodeParseFn> = [
  // todo should we use 'charOpenNodeParse' here or in the main code lexer ???
  // charOpenNodeParse,
  charContentNodeParse,
  charCloseNodeParse,
];

// export function charLexicalAnalyzer(resource: TextResource, startPosition: TextPosition): LexicalAnalyzer {
//   return createLexicalAnalyzer(parsers, resource, startPosition);
// }
