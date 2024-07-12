import {Array2} from '../../../lib/types';
import {LexicalNodeParseFn} from './lexical-analyzer';
import {stringCloseNodeParse} from './node/close/string-close/string-close-node-parse';
import {stringContentNodeParse} from './node/string-content/string-content-node-parse';

export const stringLexicalParsers: Array2<LexicalNodeParseFn> = [
  // todo should we use 'stringOpenNodeParse' here or in the main code lexer ???
  // stringOpenNodeParse,
  stringContentNodeParse,
  stringCloseNodeParse,
];

// export function stringLexicalAnalyzer(resource: TextResource, startPosition: TextPosition): LexicalAnalyzer {
//   return createLexicalAnalyzer(parsers, resource, startPosition);
// }
