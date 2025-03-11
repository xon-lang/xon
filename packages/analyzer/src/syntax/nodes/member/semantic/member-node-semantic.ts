import {
  $TypeSemantic,
  $ValueDeclarationSemantic,
  MemberNode,
  newIdTypeSemantic,
  SemanticContext,
} from '#analyzer';
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

  if (!is(this.instance.semantic, $TypeSemantic())) {
    return;
  }

  const attribute = this.instance.semantic.attributes?.get(this.id.text);

  if (!attribute) {
    return;
  }

  this.id.semantic = newIdTypeSemantic(this.id.text, attribute, newTextReference(newText(), this.id.range));

  if (is(attribute, $ValueDeclarationSemantic())) {
    this.semantic = attribute.type;
  }
}
