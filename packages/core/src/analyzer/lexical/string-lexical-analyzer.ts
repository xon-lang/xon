import {LexicalNodeParseFn, stringCloseNodeParse, stringContentNodeParse} from '#core';

export const stringLexicalParsers: LexicalNodeParseFn[] = [
  // todo should we use 'stringOpenNodeParse' here or in the main code lexer ???
  // stringOpenNodeParse,
  stringContentNodeParse,
  stringCloseNodeParse,
];
