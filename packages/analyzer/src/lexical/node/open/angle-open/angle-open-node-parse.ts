import {ANGLE_OPEN, AngleOpenNode, angleOpenNode, LexicalAnalyzer} from '#analyzer';
import {newText, Nothing, nothing} from '#common';

export function angleOpenNodeParse(analyzer: LexicalAnalyzer): AngleOpenNode | Nothing {
  if (!analyzer.hasTextAtIndex(ANGLE_OPEN)) {
    return nothing;
  }

  const text = newText(ANGLE_OPEN);
  const reference = analyzer.textReference(text);

  return angleOpenNode(reference, text);
}
