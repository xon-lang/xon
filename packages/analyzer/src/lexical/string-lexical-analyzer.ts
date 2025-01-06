import {LexicalNodeParseFn, stringCloseNodeParse, stringContentNodeParse} from '#analyzer';
import {ArrayData, FunctionData, newArrayData, newFunctionData} from '#common';

// todo remove function and use static field
export function stringLexicalParsers(): ArrayData<FunctionData<LexicalNodeParseFn>> {
  return newArrayData([
    // todo should we use 'stringOpenNodeParse' here or in the main code lexer ???
    // stringOpenNodeParse,
    newFunctionData(stringContentNodeParse),
    newFunctionData(stringCloseNodeParse),
  ]);
}
