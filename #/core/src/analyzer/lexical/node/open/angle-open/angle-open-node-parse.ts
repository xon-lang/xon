import {newTextData, Nothing, nothing} from '#common';
import {ANGLE_OPEN, AngleOpenNode, angleOpenNode, LexicalAnalyzer} from '#core';

export function angleOpenNodeParse(analyzer: LexicalAnalyzer): AngleOpenNode | Nothing {
  if (!analyzer.hasTextAtIndex(ANGLE_OPEN)) {
    return nothing;
  }

  const text = newTextData(ANGLE_OPEN);
  const reference = analyzer.textReference(text);

  return angleOpenNode(reference, text);
}
