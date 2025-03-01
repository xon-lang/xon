import {$ValueSemantic, MemberNode, newUsageSemantic, SemanticContext} from '#analyzer';
import {is} from '#typing';

export function semantifyMemberNode(this: MemberNode, context: SemanticContext): void {
  if (this.instance.semantify) {
    this.instance.semantify(context);
  }

  if (!this.instance.semantic || !this.id) {
    return;
  }

  if (context.scope.isTypeScope) {
    // ...
  } else if (is(this.instance.semantic, $ValueSemantic())) {
    const attribute = this.instance.semantic.type.getAttribute(this.id.text);

    if (attribute) {
      this.id.semantic = newUsageSemantic(this.id.text, attribute.getType(), attribute);
    }
  }

  this.semantic = this.id.semantic?.type;
}
