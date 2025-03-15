import {
  newVariableValueDeclarationSemantic,
  SemanticContext,
  TypeSemantic,
  ValueDeclarationNode,
} from '#analyzer';

export function semantifyValueDeclarationNode(this: ValueDeclarationNode, context: SemanticContext): void {
  if (this.type?.expression?.semantify) {
    context.pushScope(true);
    this.type?.expression?.semantify(context);
    context.popScope();
  }

  if (this.value?.expression?.semantify) {
    context.pushScope(false);
    this.value?.expression?.semantify(context);
    context.popScope();
  }

  const semantic = newVariableValueDeclarationSemantic(
    context.getReference(this.id.range),
    this.id.text,
    // todo fix 'as TypeSemantic'
    this.type?.expression?.semantic as TypeSemantic,
  );

  context.scope.add(semantic);
  this.semantic = semantic;
  this.id.semantic = semantic;
}
