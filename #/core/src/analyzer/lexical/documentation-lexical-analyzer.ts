import {
  LexicalNodeParseFn,
  documentationCloseNodeParse,
  documentationDescriptionNodeParse,
  documentationLabelNodeParse,
} from '#core';

export function documentationLexicalParsers(): LexicalNodeParseFn[] {
  return [
    // todo should we use 'documentationOpenNodeParse' here or in the main code lexer ???
    // documentationOpenNodeParse,
    documentationCloseNodeParse,
    documentationLabelNodeParse,
    documentationDescriptionNodeParse,
  ];
}
