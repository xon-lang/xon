import {LexicalNodeParseFn, stringCloseNodeParse, stringContentNodeParse} from '#/core';

export function stringLexicalParsers(): LexicalNodeParseFn[] {
  return [
    // todo should we use 'stringOpenNodeParse' here or in the main code lexer ???
    // stringOpenNodeParse,
    stringContentNodeParse,
    stringCloseNodeParse,
  ];
}
