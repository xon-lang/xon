import {IdNode, newIdTypeSemantic, SemanticContext} from '#analyzer';
import {newText, newTextReference} from '#common';

export function semantifyIdNode(this: IdNode, context: SemanticContext): void {
  const declaration = context.scope.get(this.text);
  this.semantic = newIdTypeSemantic(this.text, declaration, newTextReference(newText(), this.range));
}
