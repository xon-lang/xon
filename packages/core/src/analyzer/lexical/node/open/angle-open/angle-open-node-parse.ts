import {Nothing, nothing} from '#common';
import {ANGLE_OPEN, AngleOpenNode, angleOpenNode, LexicalAnalyzer, textData} from '#core';

export function angleOpenNodeParse(analyzer: LexicalAnalyzer): AngleOpenNode | Nothing {
  if (!analyzer.checkTextAtIndex(ANGLE_OPEN)) {
    return nothing;
  }

  const text = textData(ANGLE_OPEN);
  const reference = analyzer.getResourceRange(text);

  return angleOpenNode(reference, text);
}
