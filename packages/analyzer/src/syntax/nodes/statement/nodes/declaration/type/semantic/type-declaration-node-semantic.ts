import {
  $TypeSemantic,
  newNominalTypeDeclarationSemantic,
  SemanticContext,
  TypeDeclarationNode,
} from '#analyzer';
import {newTextReference, nothing} from '#common';
import {is} from '#typing';

export function semantifyTypeDeclarationNode(this: TypeDeclarationNode, context: SemanticContext): void {
  // const parameters = this.parameters?.items.map(x=>x.semantify())
  if (this.type?.expression?.semantify) {
    context.pushScope(true);
    this.type?.expression?.semantify(context);
    context.popScope();
  }

  const reference = newTextReference(context.sourceLocation, this.id.range);

  const semantic = newNominalTypeDeclarationSemantic(
    reference,
    this.id.text,
    nothing,
    is(this.type?.expression?.semantic, $TypeSemantic()) ? this.type.expression.semantic : nothing,
  );

  this.semantic = semantic;
  this.id.semantic = semantic;
  context.scope.add(semantic);
}
