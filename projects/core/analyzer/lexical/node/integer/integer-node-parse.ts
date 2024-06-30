import {Nothing, nothing} from '../../../../../lib/types';
import {LexicalAnalyzer} from '../../lexical-analyzer';
import {UNDERSCORE} from '../../lexical-analyzer-config';
import {IntegerNode, integerNode} from './integer-node';

export function integerNodeParse(analyzer: LexicalAnalyzer): IntegerNode | Nothing {
  if (!analyzer.resource.data.isDigit(analyzer.position.index)) {
    return nothing;
  }

  const text = analyzer.resource.data.takeWhile(
    (x, i) => x === UNDERSCORE || analyzer.resource.data.isDigit(i),
    analyzer.position.index,
  );

  const range = analyzer.getRange(text.length);

  return integerNode(range, text);
}
