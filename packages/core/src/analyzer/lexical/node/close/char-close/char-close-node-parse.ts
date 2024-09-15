import {Nothing, nothing} from '../../../../../../../lib/src/types';
import {textData} from '../../../../../util/data/text-data';
import {LexicalAnalyzer} from '../../../lexical-analyzer';
import {CHAR_CLOSE} from '../../../lexical-analyzer-config';
import {charCloseNode, CharCloseNode} from './char-close-node';

export function charCloseNodeParse(analyzer: LexicalAnalyzer): CharCloseNode | Nothing {
  if (!analyzer.checkTextAtIndex(CHAR_CLOSE)) {
    return nothing;
  }

  const text = textData(CHAR_CLOSE);
  const reference = analyzer.getResourceRange(text);

  return charCloseNode(reference, text);
}
