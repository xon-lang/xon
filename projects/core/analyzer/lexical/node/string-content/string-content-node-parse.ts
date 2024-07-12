import {nothing, Nothing} from '../../../../../lib/types';
import {LexicalAnalyzer} from '../../lexical-analyzer';
import {STRING_CLOSE} from '../../lexical-analyzer-config';
import {StringContentNode, stringContentNode} from './string-content-node';

export function stringContentNodeParse(analyzer: LexicalAnalyzer): StringContentNode | Nothing {
  if (analyzer.checkTextAtIndex(STRING_CLOSE)) {
    return nothing;
  }

  const endIndex = analyzer.resource.data.indexOf(STRING_CLOSE, analyzer.position.index);

  const text = analyzer.resource.data.slice(
    analyzer.position.index,
    endIndex > 0 ? endIndex : analyzer.resource.data.length,
  );

  const range = analyzer.getRange(text.length);

  return stringContentNode(range, text);
}
