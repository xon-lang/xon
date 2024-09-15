import {Nothing, nothing} from '#common';
import {IntegerContentNode, LexicalAnalyzer, UNDERSCORE, integerContentNode} from '#core';

export function integerContentNodeParse(analyzer: LexicalAnalyzer): IntegerContentNode | Nothing {
  //todo simplify it
  if (!analyzer.resource.data.characters[analyzer.position.index].isDigit(0)) {
    return nothing;
  }

  const text = analyzer.resource.data
    // todo simplify it
    .takeWhile(
      (x, i) => x === UNDERSCORE || analyzer.resource.data.characters[i].isDigit(0),
      analyzer.position.index,
    );

  const reference = analyzer.getResourceRange(text);

  return integerContentNode(reference, text);
}
