import {HighlightContext, TypeDeclarationNode} from '#analyzer';

export function highlightTypeDeclarationNode(this: TypeDeclarationNode, context: HighlightContext): void {
  // took from tm grammar
  // context.add(HighlightTokenType.Type, this.id.range);
}
