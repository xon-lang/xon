import {MemberNode, newUsageSemantic, SemanticContext} from '#analyzer';

export function semantifyMemberNode(this: MemberNode, context: SemanticContext): void {
  // todo remove all 'semantify' checks for all nodes
  if (this.target.semantify) {
    this.target.semantify(context);
  }

  if (!this.target.semantic || !this.id) {
    return;
  }

  if (!this.target.semantic) {
    return;
  }

  // todo fix '.at(0)'
  const attribute = this.target.semantic.scope?.get(this.id.text)?.first();

  if (!attribute) {
    return;
  }

  const reference = context.getReference(this.id.range);
  // todo fix isType: false
  this.id.semantic = newUsageSemantic(false, reference, this.id.text, attribute);
  this.semantic = this.id.semantic;
}
