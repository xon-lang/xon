import {HighlightContext, HighlightTokenType, TypeDeclarationNode} from '#analyzer';

export function highlightTypeDeclarationNode(this: TypeDeclarationNode, context: HighlightContext): void {
  // todo remove it here and add to tm grammar
  context.add(HighlightTokenType.Type, this.id.range);
}
