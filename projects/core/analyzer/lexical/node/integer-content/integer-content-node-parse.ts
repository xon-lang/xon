import {nothing, Nothing} from '../../../../../lib/types';
import {LexicalAnalyzer} from '../../lexical-analyzer';
import {UNDERSCORE} from '../../lexical-analyzer-config';
import {integerContentNode, IntegerContentNode} from './integer-content-node';

export function integerContentNodeParse(analyzer: LexicalAnalyzer): IntegerContentNode | Nothing {
  if (!analyzer.resource.data.isDigit(analyzer.position.index)) {
    return nothing;
  }

  const text = analyzer.resource.data.takeWhile(
    (x, i) => x === UNDERSCORE || analyzer.resource.data.isDigit(i),
    analyzer.position.index,
  );

  const range = analyzer.getRange(text.length);

  return integerContentNode(range, text);
}
