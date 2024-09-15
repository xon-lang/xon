import {Nothing, nothing} from '../../../../../../../lib/types';
import {textData} from '../../../../../util/data/text-data';
import {LexicalAnalyzer} from '../../../lexical-analyzer';
import {BRACKET_OPEN} from '../../../lexical-analyzer-config';
import {BracketOpenNode, bracketOpenNode} from './bracket-open-node';

export function bracketOpenNodeParse(analyzer: LexicalAnalyzer): BracketOpenNode | Nothing {
  if (!analyzer.checkTextAtIndex(BRACKET_OPEN)) {
    return nothing;
  }

  const text = textData(BRACKET_OPEN);
  const reference = analyzer.getResourceRange(text);

  return bracketOpenNode(reference, text);
}
