import {$JoiningNode, JOINING, JoiningNode, LexicalAnalyzer, NL, SPACE} from '#analyzer';
import {Nothing, nothing} from '#common';

export function joiningNodeParse(analyzer: LexicalAnalyzer): JoiningNode | Nothing {
  if (!analyzer.hasTextAtIndex(JOINING)) {
    return nothing;
  }

  const text = analyzer.resource.data
    .takeWhile((x) => SPACE.equals(x), analyzer.position.index + JOINING.count())
    .addFirstItems(JOINING);

  if (NL.equals(analyzer.resource.data.at2(analyzer.position.index + text.count()))) {
    text.addLastItems(NL);
  }

  const range = analyzer.textReferenceWithNewLine(text);

  return {$: $JoiningNode, text, range};
}
