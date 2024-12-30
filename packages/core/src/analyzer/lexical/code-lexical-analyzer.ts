import {ArrayData, FunctionData, newArrayData, newFunctionData} from '#common';
import {
  angleCloseNodeParse,
  angleOpenNodeParse,
  braceCloseNodeParse,
  braceOpenNodeParse,
  bracketCloseNodeParse,
  bracketOpenNodeParse,
  charOpenNodeParse,
  commaNodeParse,
  commentBlockNodeParse,
  commentLineNodeParse,
  documentationOpenNodeParse,
  idNodeParse,
  integerContentNodeParse,
  joiningNodeParse,
  LexicalNodeParseFn,
  nlNodeParse,
  operatorNodeParse,
  parenCloseNodeParse,
  parenOpenNodeParse,
  stringOpenNodeParse,
  unknownNodeParse,
  whitespaceNodeParse,
} from '#core';

// todo remove function and use static field
// todo remove all nodes if possible and use single node (e.g. 'TokenNode')
export function codeLexicalParsers(): ArrayData<FunctionData<LexicalNodeParseFn>> {
  return newArrayData([
    newFunctionData(parenOpenNodeParse),
    newFunctionData(parenCloseNodeParse),

    newFunctionData(bracketOpenNodeParse),
    newFunctionData(bracketCloseNodeParse),

    newFunctionData(angleOpenNodeParse),
    newFunctionData(angleCloseNodeParse),

    newFunctionData(braceOpenNodeParse),
    newFunctionData(braceCloseNodeParse),

    newFunctionData(integerContentNodeParse),

    newFunctionData(commaNodeParse),

    newFunctionData(commentLineNodeParse),
    newFunctionData(commentBlockNodeParse),
    newFunctionData(whitespaceNodeParse),
    newFunctionData(nlNodeParse),
    newFunctionData(joiningNodeParse),

    // todo should we add 'documentationOpenNodeParse' in codeAnalyzer instead of documentationAnalyzer ???
    newFunctionData(documentationOpenNodeParse),
    newFunctionData(stringOpenNodeParse),
    newFunctionData(charOpenNodeParse),
    newFunctionData(operatorNodeParse),
    newFunctionData(idNodeParse),
    newFunctionData(unknownNodeParse),
  ]);
}
