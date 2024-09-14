import {LexicalNodeParseFn} from './lexical-analyzer';
import {documentationCloseNodeParse} from './node/documentation-close/documentation-close-node-parse';
import {documentationDescriptionNodeParse} from './node/documentation-description/documentation-description-node-parse';
import {documentationLabelNodeParse} from './node/documentation-label/documentation-label-node-parse';

export const documentationLexicalParsers: LexicalNodeParseFn[] = [
  // todo should we use 'documentationOpenNodeParse' here or in the main code lexer ???
  // documentationOpenNodeParse,
  documentationCloseNodeParse,
  documentationLabelNodeParse,
  documentationDescriptionNodeParse,
];
