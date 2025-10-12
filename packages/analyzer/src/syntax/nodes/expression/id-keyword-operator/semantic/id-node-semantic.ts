import {$UsageSemantic, IdNode, newUsageSemantic, SemanticContext} from '#analyzer';
import {newText, newTextReference} from '#common';
import {is} from '#typing';

export function semantifyIdNode(this: IdNode, context: SemanticContext): void {
  const declaration = context.scope.get(this.text)?.first();
  const reference = newTextReference(context.uri, this.range);

  this.semantic = newUsageSemantic(context.scope.isTypeScope ?? false, reference, this.text, declaration);

  if (is(this.semantic, $UsageSemantic()) && !this.semantic.declaration) {
    context.addError(this.range, newText(`Cannot find name '${this.text}'`));
  }
}
