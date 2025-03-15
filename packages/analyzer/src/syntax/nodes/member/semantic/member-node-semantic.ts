import {
  $TypeSemantic,
  $ValueDeclarationSemantic,
  MemberNode,
  newIdTypeSemantic,
  SemanticContext,
} from '#analyzer';
import {is} from '#typing';

export function semantifyMemberNode(this: MemberNode, context: SemanticContext): void {
  // todo remove all 'semantify' checks for all nodes
  if (this.instance.semantify) {
    this.instance.semantify(context);
  }

  if (!this.instance.semantic || !this.id) {
    return;
  }

  if (!is(this.instance.semantic, $TypeSemantic())) {
    return;
  }

  const attribute = this.instance.semantic.attributes?.get(this.id.text);

  if (!attribute) {
    return;
  }

  const reference = context.getReference(this.id.range);
  this.id.semantic = newIdTypeSemantic(reference, this.id.text, attribute);

  if (is(attribute, $ValueDeclarationSemantic())) {
    this.semantic = attribute.type;
  }
}
