import {
  $LambdaNode,
  DeclarationStatementNode,
  DeclarationType,
  newDeclarationSemantic,
  SemanticContext,
} from '#analyzer';
import {is, nothing} from '#core';

export function semantifyDeclarationStatementNode(
  this: DeclarationStatementNode,
  context: SemanticContext,
): void {
  if (this.annotation?.expression?.semantify) {
    context.pushScope(true);
    this.annotation?.expression?.semantify(context);
    context.popScope();
  }

  if (this.assignment?.expression?.semantify) {
    context.pushScope(false);
    this.assignment?.expression?.semantify(context);
    context.popScope();
  }

  const declarationType = getDeclarationType(this);

  const semantic = newDeclarationSemantic(
    this.keyword?.text.toNativeString() === 'type',
    declarationType,
    context.getReference(this.id.range),
    nothing,
    this.id.getText(),
    // todo fix 'as TypeSemantic'
    nothing,
    this.annotation?.expression?.semantic?.scope,
  );

  context.scope.add(semantic);
  this.semantic = semantic;
  this.id.semantic = semantic;
}

function getDeclarationType(node: DeclarationStatementNode): DeclarationType {
  if (node.keyword?.text.toNativeString() === 'type') {
    return DeclarationType.Base;
  }

  if (is(node.parent, $LambdaNode())) {
    return DeclarationType.Parameter;
  }

  return DeclarationType.Attribute;
}
