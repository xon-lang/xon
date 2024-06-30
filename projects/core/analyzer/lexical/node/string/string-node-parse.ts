import {Nothing, nothing} from '../../../../../lib/types';
import {LexicalAnalyzer} from '../../lexical-analyzer';
import {STRING_QUOTE} from '../../lexical-analyzer-config';
import {StringNode, stringNode} from './string-node';

export function stringNodeParse(analyzer: LexicalAnalyzer): StringNode | Nothing {
  if (!analyzer.checkTextAtIndex(STRING_QUOTE)) {
    return nothing;
  }

  const stopIndex = analyzer.resource.data.indexOf(
    STRING_QUOTE,
    analyzer.position.index + STRING_QUOTE.length,
  );
  const endSlice = stopIndex < 0 ? analyzer.resource.data.length : stopIndex + STRING_QUOTE.length;

  const text = analyzer.resource.data.slice(analyzer.position.index, endSlice);
  const range = analyzer.getRangeWithNL(text.length);

  return stringNode(range, text);
}
