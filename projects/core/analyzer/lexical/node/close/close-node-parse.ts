import {Nothing, nothing} from '../../../../../lib/types';
import {LexicalAnalyzer} from '../../lexical-analyzer';
import {ARRAY_CLOSE, GROUP_CLOSE, OBJECT_CLOSE} from '../../lexical-analyzer-config';
import {CloseNode, closeNode} from './close-node';

export function closeNodeParse(analyzer: LexicalAnalyzer): CloseNode | Nothing {
  // todo create separate tokens for each lexemes
  const closesLexemes = [GROUP_CLOSE, ARRAY_CLOSE, OBJECT_CLOSE];

  if (!closesLexemes.some((x) => analyzer.checkTextAtIndex(x))) {
    return nothing;
  }

  const text = analyzer.resource.data[analyzer.position.index];
  const range = analyzer.getRange(text.length);

  return closeNode(range, text);
}
