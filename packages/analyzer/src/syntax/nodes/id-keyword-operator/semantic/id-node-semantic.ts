import {IdNode, newUsageSemantic, SemanticContext} from '#analyzer';

export function semantifyIdNode(this: IdNode, context: SemanticContext): void {
  const declaration = context.scope.find(this.text);

  this.semantic = newUsageSemantic(this.text, declaration?.getType(), declaration);
}
