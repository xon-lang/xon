import {Nothing, nothing} from '../../../../../lib/types';
import {LexicalAnalyzer} from '../../lexical-analyzer';
import {UNDERSCORE} from '../../lexical-analyzer-config';
import {IdNode, idNode} from './id-node';

export function idNodeParse(analyzer: LexicalAnalyzer): IdNode | Nothing {
  if (!analyzer.checkTextAtIndex(UNDERSCORE) && !analyzer.resource.data.isLetter(analyzer.position.index)) {
    return nothing;
  }

  const text = analyzer.resource.data.takeWhile(
    (x, i) => x === UNDERSCORE || analyzer.resource.data.isLetterOrDigit(i),
    analyzer.position.index,
  );

  const range = analyzer.getRange(text.length);

  return idNode(range, text);
}
