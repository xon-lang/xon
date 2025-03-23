import {IdNode, newIdTypeSemantic, SemanticContext} from '#analyzer';
import {newTextReference} from '#common';

export function semantifyIdNode(this: IdNode, context: SemanticContext): void {
  const declaration = context.scope.get(this.text);
  const reference = newTextReference(context.sourceLocation, this.range);

  this.semantic = newIdTypeSemantic(reference, this.text, declaration);
}
