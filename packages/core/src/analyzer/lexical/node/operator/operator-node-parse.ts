import {Nothing, nothing} from '../../../../../../lib/src/types';
import {textData} from '../../../../util/data/text-data';
import {LexicalAnalyzer} from '../../lexical-analyzer';
import {AFFIX_MODIFIERS, OPERATORS_SORTED} from '../../lexical-analyzer-config';
import {idNode} from '../id/id-node';
import {idNodeParse} from '../id/id-node-parse';
import {LexicalNode} from '../lexical-node';
import {operatorNode} from './operator-node';

export function operatorNodeParse(analyzer: LexicalAnalyzer): LexicalNode | Nothing {
  const operator = OPERATORS_SORTED.last((x) => analyzer.checkTextAtIndex(x));

  if (!operator) {
    return nothing;
  }

  const text = textData(operator);

  if (
    analyzer.previousNonHiddenNode &&
    AFFIX_MODIFIERS.includes(analyzer.previousNonHiddenNode.text.toString())
  ) {
    const range = analyzer.getResourceRange(text);

    return idNode(range, text);
  }

  const id = idNodeParse(analyzer);

  if (id && id.text.length() > text.length()) {
    return id;
  }

  const reference = analyzer.getResourceRange(text);

  return operatorNode(reference, text);
}
