import {DeclarationStatementNode, HighlightContext} from '#analyzer';

export function highlightDeclarationStatementNode(
  this: DeclarationStatementNode,
  context: HighlightContext,
): void {
  // took from tm grammar
  // context.add(HighlightTokenType.Type, this.id.range);
}
