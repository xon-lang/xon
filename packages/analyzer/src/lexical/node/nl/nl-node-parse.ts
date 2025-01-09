import {$NlNode, LexicalAnalyzer, NL, NlNode, SPACE} from '#analyzer';
import {Nothing, nothing} from '#common';

export function nlNodeParse(analyzer: LexicalAnalyzer): NlNode | Nothing {
  if (!analyzer.hasTextAtIndex(NL)) {
    return nothing;
  }

  const textWithIndents = analyzer.resource.data.takeWhile(
    (x) => NL.equals(x) || SPACE.equals(x),
    analyzer.position.index,
  );

  const lastNlIndex = textWithIndents.lastItemsIndex(NL) ?? -1;

  const text = textWithIndents.slice(0, lastNlIndex + 1);
  const range = analyzer.textReferenceWithNewLine(text);

  return {$: $NlNode, text, range, isHidden: true};
}
