import {ArrayData, FunctionData, newArrayData, newFunctionData} from '#common';
import {LexicalNodeParseFn, charCloseNodeParse, charContentNodeParse} from '#core';

// todo remove function and use static field
export function charLexicalParsers(): ArrayData<FunctionData<LexicalNodeParseFn>> {
  return newArrayData([
    // todo should we use 'charOpenNodeParse' here or in the main code lexer ???
    // charOpenNodeParse,
    newFunctionData(charContentNodeParse),
    newFunctionData(charCloseNodeParse),
  ]);
}
