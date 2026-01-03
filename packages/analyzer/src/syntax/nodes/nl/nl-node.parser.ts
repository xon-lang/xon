import {$NlNode, AnalyzerContext, CR, CRLF, LF, NlNode} from '#analyzer';
import {Nothing} from '#core';

export function parseNlNode(context: AnalyzerContext): NlNode | Nothing {
  const node =
    context.source.takeText($NlNode(), CRLF) ??
    context.source.takeCharacter($NlNode(), CR) ??
    context.source.takeCharacter($NlNode(), LF);

  if (node) {
    node.isHidden = true;
    context.hiddenNodes.addLastItem(node);
  }

  return node;
}
