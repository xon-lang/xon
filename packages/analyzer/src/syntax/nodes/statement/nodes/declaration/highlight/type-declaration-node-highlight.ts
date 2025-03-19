import {DeclarationNode, HighlightContext} from '#analyzer';

export function highlightDeclarationNode(this: DeclarationNode, context: HighlightContext): void {
  // took from tm grammar
  // context.add(HighlightTokenType.Type, this.id.range);
}
