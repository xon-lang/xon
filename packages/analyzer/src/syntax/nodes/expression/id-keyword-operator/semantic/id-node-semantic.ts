import {$UsageSemantic, IdNode, newUsageSemantic, SemanticContext} from '#analyzer';
import {is, newText, newTextReference} from '#core';

export function semantifyIdNode(this: IdNode, context: SemanticContext): void {
  const declaration = context.scope.get(this.getText())?.first();
  const reference = newTextReference(context.uri, this.range);

  this.semantic = newUsageSemantic(
    context.scope.isTypeScope ?? false,
    reference,
    this.getText(),
    declaration,
  );

  if (is(this.semantic, $UsageSemantic()) && !this.semantic.declaration) {
    context.addError(this.range, newText(`Cannot find name '${this.getText()}'`));
  }
}
