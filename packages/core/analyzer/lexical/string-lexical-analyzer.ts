import {LexicalNodeParseFn} from './lexical-analyzer';
import {stringCloseNodeParse} from './node/close/string-close/string-close-node-parse';
import {stringContentNodeParse} from './node/string-content/string-content-node-parse';

export const stringLexicalParsers: LexicalNodeParseFn[] = [
  // todo should we use 'stringOpenNodeParse' here or in the main code lexer ???
  // stringOpenNodeParse,
  stringContentNodeParse,
  stringCloseNodeParse,
];
