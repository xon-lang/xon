import {LexicalNodeParseFn, charCloseNodeParse, charContentNodeParse} from '#analyzer';
import {ArrayData, FunctionData, newArrayData, newFunctionData} from '#common';

// todo remove function and use static field
export function charLexicalParsers(): ArrayData<FunctionData<LexicalNodeParseFn>> {
  return newArrayData([
    // todo should we use 'charOpenNodeParse' here or in the main code lexer ???
    // newFunctionData(charOpenNodeParse),
    newFunctionData(charContentNodeParse),
    newFunctionData(charCloseNodeParse),
  ]);
}
