import {Nothing, nothing} from '../../../../../../../lib/src/types';
import {textData} from '../../../../../util/data/text-data';
import {LexicalAnalyzer} from '../../../lexical-analyzer';
import {BRACKET_CLOSE} from '../../../lexical-analyzer-config';
import {bracketCloseNode, BracketCloseNode} from './bracket-close-node';

export function bracketCloseNodeParse(analyzer: LexicalAnalyzer): BracketCloseNode | Nothing {
  if (!analyzer.checkTextAtIndex(BRACKET_CLOSE)) {
    return nothing;
  }

  const text = textData(BRACKET_CLOSE);
  const reference = analyzer.getResourceRange(text);

  return bracketCloseNode(reference, text);
}
