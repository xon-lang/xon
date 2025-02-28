import {$ValueSemantic, MemberNode, SemanticContext} from '#analyzer';
import { is } from '#typing';

export function semantifyMemberNode(this: MemberNode, context: SemanticContext): void {


  if (this.instance.semantify) {
    this.instance.semantify(context);
  }

  if (!this.instance.semantic || !this.id) {
    return;
  }


  if (context.scope.isTypeScope) {
  } else if(is(this.instance.semantic, $ValueSemantic())) {
    this.instance.semantic.type.attributes().;
    
  }

  this.semantic = this.id.semantic;
}
