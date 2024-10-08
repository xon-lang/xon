import {LexicalAnalyzer} from '../../lexical-analyzer';
import {UnknownNode, unknownNode} from './unknown-node';

export function unknownNodeParse(analyzer: LexicalAnalyzer): UnknownNode {
  const text = analyzer.resource.data.slice(analyzer.position.index, analyzer.position.index + 1);
  const reference = analyzer.getResourceRange(text);

  return unknownNode(reference, text);
}
