import {
  LexicalNodeParseFn,
  documentationCloseNodeParse,
  documentationDescriptionNodeParse,
  documentationLabelNodeParse,
} from '#core';

export const documentationLexicalParsers: LexicalNodeParseFn[] = [
  // todo should we use 'documentationOpenNodeParse' here or in the main code lexer ???
  // documentationOpenNodeParse,
  documentationCloseNodeParse,
  documentationLabelNodeParse,
  documentationDescriptionNodeParse,
];
