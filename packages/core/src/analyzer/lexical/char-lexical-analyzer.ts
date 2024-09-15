import {LexicalNodeParseFn, charCloseNodeParse, charContentNodeParse} from '#core';

export const charLexicalParsers: LexicalNodeParseFn[] = [
  // todo should we use 'charOpenNodeParse' here or in the main code lexer ???
  // charOpenNodeParse,
  charContentNodeParse,
  charCloseNodeParse,
];
