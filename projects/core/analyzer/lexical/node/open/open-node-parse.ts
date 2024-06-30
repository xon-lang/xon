import {Nothing, nothing} from '../../../../../lib/types';
import {LexicalAnalyzer} from '../../lexical-analyzer';
import {ARRAY_OPEN, GROUP_OPEN, OBJECT_OPEN} from '../../lexical-analyzer-config';
import {OpenNode, openNode} from './open-node';

export function openNodeParse(analyzer: LexicalAnalyzer): OpenNode | Nothing {
  // todo create separate tokens for each lexemes
  const opensLexemes = [GROUP_OPEN, ARRAY_OPEN, OBJECT_OPEN];

  if (!opensLexemes.some((x) => analyzer.checkTextAtIndex(x))) {
    return nothing;
  }

  const text = analyzer.resource.data[analyzer.position.index];
  const range = analyzer.getRange(text.length);

  return openNode(range, text);
}
