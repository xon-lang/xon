import {$IntegerContentNode, IntegerContentNode, LexicalAnalyzer, UNDERSCORE} from '#analyzer';
import {Nothing, nothing} from '#common';

export function integerContentNodeParse(analyzer: LexicalAnalyzer): IntegerContentNode | Nothing {
  //todo simplify it
  if (!analyzer.resource.data.at2(analyzer.position.index).isDigit()) {
    return nothing;
  }

  const text = analyzer.resource.data
    // todo simplify it
    .takeWhile(
      (x, i) => UNDERSCORE.equals(x) || analyzer.resource.data.at2(i).isDigit(),
      analyzer.position.index,
    );

  const range = analyzer.textReference(text);

  return {$: $IntegerContentNode, text, range};
}
