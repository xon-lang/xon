import {Nothing, nothing} from '#/common';
import {IntegerContentNode, LexicalAnalyzer, UNDERSCORE, integerContentNode} from '#/core';

export function integerContentNodeParse(analyzer: LexicalAnalyzer): IntegerContentNode | Nothing {
  //todo simplify it
  if (!analyzer.resource.data.at2(analyzer.position.index).isDigit()) {
    return nothing;
  }

  const text = analyzer.resource.data
    // todo simplify it
    .takeWhile(
      (x, i) => x.equals(UNDERSCORE) || analyzer.resource.data.at2(i).isDigit(),
      analyzer.position.index,
    );

  const reference = analyzer.getResourceRange(text);

  return integerContentNode(reference, text);
}
