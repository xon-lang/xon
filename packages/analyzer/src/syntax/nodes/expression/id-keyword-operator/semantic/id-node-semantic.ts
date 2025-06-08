import {$IdTypeSemantic, IdNode, newIdTypeSemantic, SemanticContext} from '#analyzer';
import {newText, newTextReference} from '#common';
import {is} from '#typing';

export function semantifyIdNode(this: IdNode, context: SemanticContext): void {
  const declaration = context.scope.get(this.text)?.first();
  const reference = newTextReference(context.uri, this.range);

  this.semantic = newIdTypeSemantic(reference, this.text, declaration);

  if (is(this.semantic, $IdTypeSemantic()) && !this.semantic.declaration) {
    context.addError(this.range, newText(`Cannot find name '${this.text}'`));
  }
}
