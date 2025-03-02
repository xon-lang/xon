import {IdNode, newUsageTypeSemantic, newUsageValueSemantic, SemanticContext} from '#analyzer';
import {newText, newTextReference} from '#common';

export function semantifyIdNode(this: IdNode, context: SemanticContext): void {
  const declaration = context.scope.get(this.text);

  if (context.scope.isTypeScope) {
    this.semantic = newUsageTypeSemantic(this.text, declaration, newTextReference(newText(), this.range));
  } else {
    this.semantic = newUsageValueSemantic(this.text, declaration, newTextReference(newText(), this.range));
  }
}
