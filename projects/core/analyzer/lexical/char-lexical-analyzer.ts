import {LexicalNodeParseFn} from './lexical-analyzer';
import {charContentNodeParse} from './node/char-content/char-content-node-parse';
import {charCloseNodeParse} from './node/close/char-close/char-close-node-parse';

export const charLexicalParsers: LexicalNodeParseFn[] = [
  // todo should we use 'charOpenNodeParse' here or in the main code lexer ???
  // charOpenNodeParse,
  charContentNodeParse,
  charCloseNodeParse,
];
