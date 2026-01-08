import {
  AnalyzerContext,
  IMPORT,
  ImportNode,
  newImportNode,
  parseStringNode,
  parseWhitespaceNode,
} from '#analyzer';
import {Nothing, nothing} from '#core';

export function parseImportNode2(context: AnalyzerContext): ImportNode | Nothing {
  const keyword = context.source.takeWord(IMPORT);

  if (!keyword) {
    return nothing;
  }

  parseWhitespaceNode(context);
  const expression = parseStringNode(context); // todo add AsInfixNode

  // if (!is(expression, $StringNode()) && !is(expression, $AsInfixNode())) {
  //   context.addError((expression ?? keyword).range, newText(`Expression expect`));
  // }

  return newImportNode(keyword, expression);
}
