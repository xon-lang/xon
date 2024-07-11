import {Nothing, nothing} from '../../../../../lib/types';
import {LexicalAnalyzer} from '../../lexical-analyzer';
import {CHAR_QUOTE_CLOSE, CHAR_QUOTE_OPEN} from '../../lexical-analyzer-config';
import {charNode, CharNode} from './char-node';

export function charNodeParse(analyzer: LexicalAnalyzer): CharNode | Nothing {
  if (!analyzer.checkTextAtIndex(CHAR_QUOTE_OPEN)) {
    return nothing;
  }

  const stopIndex = analyzer.resource.data.indexOf(
    CHAR_QUOTE_CLOSE,
    analyzer.position.index + CHAR_QUOTE_OPEN.length,
  );

  const endSlice = stopIndex < 0 ? analyzer.resource.data.length : stopIndex + CHAR_QUOTE_CLOSE.length;

  const text = analyzer.resource.data.slice(analyzer.position.index, endSlice);
  const range = analyzer.getRangeWithNL(text.length);

  return charNode(range, text);
}
