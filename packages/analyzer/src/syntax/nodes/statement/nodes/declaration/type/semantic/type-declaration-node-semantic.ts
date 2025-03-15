import {
  $TypeSemantic,
  newNominalTypeDeclarationSemantic,
  SemanticContext,
  TypeDeclarationNode,
} from '#analyzer';
import {newTextReference, nothing} from '#common';
import {is} from '#typing';

export function semantifyTypeDeclarationNode(this: TypeDeclarationNode, context: SemanticContext): void {
  context.pushScope();

  // const parameters = this.parameters?.items.map(x=>x.semantify())
  if (this.type?.expression?.semantify) {
    context.scope.isTypeScope = true;
    this.type?.expression?.semantify(context);
    context.scope.isTypeScope = false;
  }

  if (is(this.type?.expression?.semantic, $TypeSemantic())) {
    const reference = newTextReference(context.sourceLocation, this.id.range);

    this.semantic = newNominalTypeDeclarationSemantic(
      reference,
      this.id.text,
      nothing,
      this.type.expression.semantic,
    );

    this.id.semantic = this.semantic;
    context.scope.add(this.semantic);
  }

  context.popScope();
}
