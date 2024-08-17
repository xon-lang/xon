import {nothing, Nothing} from '../../../../../lib/types';
import {LexicalAnalyzer} from '../../lexical-analyzer';
import {CHAR_CLOSE} from '../../lexical-analyzer-config';
import {CharContentNode, charContentNode} from './char-content-node';

export function charContentNodeParse(analyzer: LexicalAnalyzer): CharContentNode | Nothing {
  if (analyzer.checkTextAtIndex(CHAR_CLOSE)) {
    return nothing;
  }

  const endIndex = analyzer.resource.data.firstIndex(CHAR_CLOSE, analyzer.position.index);

  const text = analyzer.resource.data.slice(
    analyzer.position.index,
    endIndex > 0 ? endIndex : analyzer.resource.data.length(),
  );

  const reference = analyzer.getResourceRange(text);

  return charContentNode(reference, text);
}
