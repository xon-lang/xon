import {Nothing, nothing} from '../../../../../../lib/types';
import {textData} from '../../../../../util/data/text-data';
import {LexicalAnalyzer} from '../../../lexical-analyzer';
import {CHAR_OPEN} from '../../../lexical-analyzer-config';
import {CharOpenNode, charOpenNode} from './char-open-node';

export function charOpenNodeParse(analyzer: LexicalAnalyzer): CharOpenNode | Nothing {
  if (!analyzer.checkTextAtIndex(CHAR_OPEN)) {
    return nothing;
  }

  const text = textData(CHAR_OPEN);
  const reference = analyzer.getResourceRange(text);

  return charOpenNode(reference, text);
}
