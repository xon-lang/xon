import {LexicalAnalyzer, STRING_OPEN, StringOpenNode, stringOpenNode} from '#analyzer';
import {newText, Nothing, nothing} from '#common';

export function stringOpenNodeParse(analyzer: LexicalAnalyzer): StringOpenNode | Nothing {
  if (!analyzer.hasTextAtIndex(STRING_OPEN)) {
    return nothing;
  }

  const text = newText(STRING_OPEN);
  const reference = analyzer.textReference(text);

  return stringOpenNode(reference, text);
}
