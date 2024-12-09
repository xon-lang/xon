import {ArrayData, FunctionData, newArrayData, newFunctionData} from '#common';
import {LexicalNodeParseFn, stringCloseNodeParse, stringContentNodeParse, stringOpenNodeParse} from '#core';

export const stringLexicalParsers: ArrayData<FunctionData<LexicalNodeParseFn>> = newArrayData([
  newFunctionData(stringOpenNodeParse),
  newFunctionData(stringContentNodeParse),
  newFunctionData(stringCloseNodeParse),
]);
