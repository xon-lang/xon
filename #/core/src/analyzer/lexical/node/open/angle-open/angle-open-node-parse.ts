import {newTextData, Nothing, nothing} from '#/common';
import {ANGLE_OPEN, AngleOpenNode, angleOpenNode, LexicalAnalyzer} from '#/core';

export function angleOpenNodeParse(analyzer: LexicalAnalyzer): AngleOpenNode | Nothing {
  if (!analyzer.checkTextAtIndex(ANGLE_OPEN)) {
    return nothing;
  }

  const text = newTextData(ANGLE_OPEN);
  const reference = analyzer.getResourceRange(text);

  return angleOpenNode(reference, text);
}
