import {Nothing, nothing} from '../../../../../../lib/types';
import {LexicalAnalyzer} from '../../../lexical-analyzer';
import {BRACKET_OPEN} from '../../../lexical-analyzer-config';
import {BracketOpenNode, bracketOpenNode} from './bracket-open-node';

export function bracketOpenNodeParse(analyzer: LexicalAnalyzer): BracketOpenNode | Nothing {
  if (!analyzer.checkTextAtIndex(BRACKET_OPEN)) {
    return nothing;
  }

  const text = analyzer.resource.data[analyzer.position.index];
  const range = analyzer.getRange(text.length);

  return bracketOpenNode(range, text);
}
