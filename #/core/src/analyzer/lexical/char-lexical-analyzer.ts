import {LexicalNodeParseFn, charCloseNodeParse, charContentNodeParse} from '#/core';

export function charLexicalParsers(): LexicalNodeParseFn[] {
  return [
    // todo should we use 'charOpenNodeParse' here or in the main code lexer ???
    // charOpenNodeParse,
    charContentNodeParse,
    charCloseNodeParse,
  ];
}
