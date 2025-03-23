import {DeclarationNode, newVariableValueDeclarationSemantic, SemanticContext, TypeSemantic} from '#analyzer';

export function semantifyDeclarationNode(this: DeclarationNode, context: SemanticContext): void {
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

  const semantic = newVariableValueDeclarationSemantic(
    context.getReference(this.id.range),
    this.id.text,
    // todo fix 'as TypeSemantic'
    this.annotation?.expression?.semantic as TypeSemantic,
  );

  context.scope.add(semantic);
  this.semantic = semantic;
  this.id.semantic = semantic;
}
