import {COMMA, CommaNode, commaNode, LexicalAnalyzer} from '#analyzer';
import {newText, Nothing, nothing} from '#common';

export function commaNodeParse(analyzer: LexicalAnalyzer): CommaNode | Nothing {
  if (!analyzer.hasTextAtIndex(COMMA)) {
    return nothing;
  }

  const text = newText(COMMA);
  const reference = analyzer.textReference(text);

  return commaNode(reference, text);
}
