import {Nothing, nothing} from '../../../../../lib/types';
import {LexicalAnalyzer} from '../../lexical-analyzer';
import {CHAR_QUOTE} from '../../lexical-analyzer-config';
import {CharNode, charNode} from './char-node';

export function charNodeParse(analyzer: LexicalAnalyzer): CharNode | Nothing {
  if (analyzer.resource.data[analyzer.position.index] !== CHAR_QUOTE) {
    return nothing;
  }

  const nextQuoteIndex = analyzer.resource.data.indexOf(CHAR_QUOTE, analyzer.position.index + 1);

  const endSlice = nextQuoteIndex < 0 ? analyzer.resource.data.length : nextQuoteIndex + 1;
  const text = analyzer.resource.data.slice(analyzer.position.index, endSlice);
  const range = analyzer.getRangeWithNL(text.length);

  return charNode(range, text);
}
