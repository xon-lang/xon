import {newNominalTypeDeclarationSemantic, ParameterTypeDeclarationNode, SemanticContext} from '#analyzer';
import {nothing} from '#common';

export function semantifyParameterTypeDeclarationNode(
  this: ParameterTypeDeclarationNode,
  context: SemanticContext,
): void {
  // const parameters = this.parameters?.items.map((x) => x.semantify());

  this.semantic = newNominalTypeDeclarationSemantic(this.id.text, nothing);
}
