import {$ValueSemantic, MemberNode, newUsageValueSemantic, SemanticContext} from '#analyzer';
import {newText, newTextReference} from '#common';
import {is} from '#typing';

export function semantifyMemberNode(this: MemberNode, context: SemanticContext): void {
  // todo remove all 'semantify' checks for all nodes
  if (this.instance.semantify) {
    this.instance.semantify(context);
  }

  if (!this.instance.semantic || !this.id) {
    return;
  }

  if (context.scope.isTypeScope) {
    // ...
  } else if (is(this.instance.semantic, $ValueSemantic())) {
    const attribute = this.instance.semantic.type?.attributes?.get(this.id.text);

    if (attribute) {
      this.id.semantic = newUsageValueSemantic(
        this.id.text,
        attribute,
        newTextReference(newText(), this.id.range),
      );
    }
  }

  this.semantic = this.id.semantic?.type;
}
