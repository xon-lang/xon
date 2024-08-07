import {Nothing, nothing} from '../../../../../lib/types';
import {LexicalAnalyzer} from '../../lexical-analyzer';
import {OPERATORS_SORTED} from '../../lexical-analyzer-config';
import {idNodeParse} from '../id/id-node-parse';
import {LexicalNode} from '../lexical-node';
import {operatorNode} from './operator-node';

export function operatorNodeParse(analyzer: LexicalAnalyzer): LexicalNode | Nothing {
  const text = OPERATORS_SORTED.last((x) => analyzer.checkTextAtIndex(x));

  if (!text) {
    return nothing;
  }

  const id = idNodeParse(analyzer);

  if (id && id.text.length > text.length) {
    return id;
  }

  const range = analyzer.getRange(text.length);

  return operatorNode(range, text);
}
