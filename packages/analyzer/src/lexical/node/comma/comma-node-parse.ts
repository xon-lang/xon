import {$CommaNode, COMMA, CommaNode, LexicalAnalyzer} from '#analyzer';
import {newText, Nothing, nothing} from '#common';

export function commaNodeParse(analyzer: LexicalAnalyzer): CommaNode | Nothing {
  if (!analyzer.hasTextAtIndex(COMMA)) {
    return nothing;
  }

  const text = newText(COMMA);
  const range = analyzer.textReference(text);

  return {$: $CommaNode, text, range};
}
