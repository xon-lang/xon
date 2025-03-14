import {HighlightContext, HighlightTokenType, TypeDeclarationNode} from '#analyzer';

export function highlightTypeDeclarationNode(this: TypeDeclarationNode, context: HighlightContext): void {
  context.add(HighlightTokenType.StorageType, this.id.range);
}
