import {Nothing, nothing} from '../../../../../../../lib/types';
import {textData} from '../../../../../util/data/text-data';
import {LexicalAnalyzer} from '../../../lexical-analyzer';
import {ANGLE_OPEN} from '../../../lexical-analyzer-config';
import {AngleOpenNode, angleOpenNode} from './angle-open-node';

export function angleOpenNodeParse(analyzer: LexicalAnalyzer): AngleOpenNode | Nothing {
  if (!analyzer.checkTextAtIndex(ANGLE_OPEN)) {
    return nothing;
  }

  const text = textData(ANGLE_OPEN);
  const reference = analyzer.getResourceRange(text);

  return angleOpenNode(reference, text);
}
