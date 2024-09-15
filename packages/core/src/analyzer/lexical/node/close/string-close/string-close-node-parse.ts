import {Nothing, nothing} from '../../../../../../../lib/src/types';
import {textData} from '../../../../../util/data/text-data';
import {LexicalAnalyzer} from '../../../lexical-analyzer';
import {STRING_CLOSE} from '../../../lexical-analyzer-config';
import {StringCloseNode, stringCloseNode} from './string-close-node';

export function stringCloseNodeParse(analyzer: LexicalAnalyzer): StringCloseNode | Nothing {
  if (!analyzer.checkTextAtIndex(STRING_CLOSE)) {
    return nothing;
  }

  const text = textData(STRING_CLOSE);
  const reference = analyzer.getResourceRange(text);

  return stringCloseNode(reference, text);
}
