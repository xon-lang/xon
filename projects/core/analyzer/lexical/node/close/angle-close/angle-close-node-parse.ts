import {Nothing, nothing} from '../../../../../../lib/types';
import {textData} from '../../../../../util/data/text-data';
import {LexicalAnalyzer} from '../../../lexical-analyzer';
import {ANGLE_CLOSE} from '../../../lexical-analyzer-config';
import {AngleCloseNode, angleCloseNode} from './angle-close-node';

export function angleCloseNodeParse(analyzer: LexicalAnalyzer): AngleCloseNode | Nothing {
  if (!analyzer.checkTextAtIndex(ANGLE_CLOSE)) {
    return nothing;
  }

  const text = textData(ANGLE_CLOSE);
  const reference = analyzer.getResourceRange(text);

  return angleCloseNode(reference, text);
}
