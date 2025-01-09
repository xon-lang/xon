import {$AngleOpenNode, ANGLE_OPEN, AngleOpenNode, LexicalAnalyzer} from '#analyzer';
import {newText, Nothing, nothing} from '#common';

export function angleOpenNodeParse(analyzer: LexicalAnalyzer): AngleOpenNode | Nothing {
  if (!analyzer.hasTextAtIndex(ANGLE_OPEN)) {
    return nothing;
  }

  const text = newText(ANGLE_OPEN);
  const range = analyzer.textReference(text);

  return {$: $AngleOpenNode, text, range};
}
