import {Nothing, nothing} from '../../../../../../../lib/types';
import {textData} from '../../../../../util/data/text-data';
import {LexicalAnalyzer} from '../../../lexical-analyzer';
import {PAREN_CLOSE} from '../../../lexical-analyzer-config';
import {ParenCloseNode, parenCloseNode} from './paren-close-node';

export function parenCloseNodeParse(analyzer: LexicalAnalyzer): ParenCloseNode | Nothing {
  if (!analyzer.checkTextAtIndex(PAREN_CLOSE)) {
    return nothing;
  }

  const text = textData(PAREN_CLOSE);
  const reference = analyzer.getResourceRange(text);

  return parenCloseNode(reference, text);
}
