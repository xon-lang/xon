import {ANGLE_CLOSE, AngleCloseNode, angleCloseNode, LexicalAnalyzer} from '#analyzer';
import {newText, Nothing, nothing} from '#common';

export function angleCloseNodeParse(analyzer: LexicalAnalyzer): AngleCloseNode | Nothing {
  if (!analyzer.hasTextAtIndex(ANGLE_CLOSE)) {
    return nothing;
  }

  const text = newText(ANGLE_CLOSE);
  const reference = analyzer.textReference(text);

  return angleCloseNode(reference, text);
}
