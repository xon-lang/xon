import {newTextData, Nothing, nothing} from '#common';
import {ANGLE_CLOSE, AngleCloseNode, angleCloseNode, LexicalAnalyzer} from '#core';

export function angleCloseNodeParse(analyzer: LexicalAnalyzer): AngleCloseNode | Nothing {
  if (!analyzer.hasTextAtIndex(ANGLE_CLOSE)) {
    return nothing;
  }

  const text = newTextData(ANGLE_CLOSE);
  const reference = analyzer.textReference(text);

  return angleCloseNode(reference, text);
}
