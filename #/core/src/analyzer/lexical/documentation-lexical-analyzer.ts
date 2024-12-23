import {ArrayData, FunctionData, newArrayData, newFunctionData} from '#common';
import {
  LexicalNodeParseFn,
  documentationCloseNodeParse,
  documentationDescriptionNodeParse,
  documentationLabelNodeParse,
} from '#core';

// todo remove function and use static field
export function documentationLexicalParsers(): ArrayData<FunctionData<LexicalNodeParseFn>> {
  return newArrayData([
    // todo should we use 'documentationOpenNodeParse' here or in the main code lexer ???
    // documentationOpenNodeParse,
    newFunctionData(documentationCloseNodeParse),
    newFunctionData(documentationLabelNodeParse),
    newFunctionData(documentationDescriptionNodeParse),
  ]);
}
