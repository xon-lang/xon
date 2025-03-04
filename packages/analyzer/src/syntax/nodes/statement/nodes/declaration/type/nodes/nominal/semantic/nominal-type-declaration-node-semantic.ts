import {
  $TypeSemantic,
  newNominalTypeDeclarationSemantic,
  NominalTypeDeclarationNode,
  SemanticContext,
} from '#analyzer';
import {nothing} from '#common';
import {is} from '#typing';

export function semantifyNominalTypeDeclarationNode(
  this: NominalTypeDeclarationNode,
  context: SemanticContext,
): void {
  context.pushScope();

  // const parameters = this.parameters?.items.map(x=>x.semantify())
  if (this.type?.value?.semantify) {
    context.scope.isTypeScope = true;
    this.type?.value?.semantify(context);
    context.scope.isTypeScope = false;
  }

  if (is(this.type?.value?.semantic, $TypeSemantic())) {
    this.semantic = newNominalTypeDeclarationSemantic(this.id.text, nothing, this.type.value.semantic);
    this.id.semantic = this.semantic;
    context.scope.add(this.semantic);
  }

  context.popScope();
}
