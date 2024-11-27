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
  whitespaceNodeParse,
} from '#/core';

// todo remove all nodes if possible and use single node (e.g. 'TokenNode')
export function codeLexicalParsers(): LexicalNodeParseFn[] {
  return [
    parenOpenNodeParse,
    parenCloseNodeParse,
    bracketOpenNodeParse,
    angleOpenNodeParse,

    bracketCloseNodeParse,
    braceOpenNodeParse,
    braceCloseNodeParse,
    angleCloseNodeParse,

    integerContentNodeParse,

    commaNodeParse,

    commentLineNodeParse,
    commentBlockNodeParse,
    whitespaceNodeParse,
    nlNodeParse,
    joiningNodeParse,

    // todo should we add 'documentationOpenNodeParse' in codeAnalyzer instead of documentationAnalyzer ???
    documentationOpenNodeParse,
    stringOpenNodeParse,
    charOpenNodeParse,
    operatorNodeParse,
    idNodeParse,
  ];
}
