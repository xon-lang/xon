import {MemberNode, newUsageSemantic, SemanticContext} from '#analyzer';

export function semantifyMemberNode(this: MemberNode, context: SemanticContext): void {
  // todo remove all 'semantify' checks for all nodes
  if (this.instance.semantify) {
    this.instance.semantify(context);
  }

  if (!this.instance.semantic || !this.id) {
    return;
  }

  if (!this.instance.semantic) {
    return;
  }

  // todo fix '.at(0)'
  const attribute = this.instance.semantic.scope?.get(this.id.text)?.first();

  if (!attribute) {
    return;
  }

  const reference = context.getReference(this.id.range);
  // todo fix isType: false
  this.id.semantic = newUsageSemantic(false, reference, this.id.text, attribute);
  this.semantic = this.id.semantic;
}
