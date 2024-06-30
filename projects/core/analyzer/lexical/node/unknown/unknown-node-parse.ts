import {LexicalAnalyzer} from '../../lexical-analyzer';
import {UnknownNode, unknownNode} from './unknown-node';

export function unknownNodeParse(analyzer: LexicalAnalyzer): UnknownNode {
  const text = analyzer.resource.data[analyzer.position.index];
  const range = analyzer.getRange(1);

  return unknownNode(range, text);
}
