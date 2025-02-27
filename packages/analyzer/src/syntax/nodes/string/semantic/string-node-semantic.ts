import {newStringTypeSemantic, newValueSemantic, SemanticContext, StringNode} from '#analyzer';
import {newText} from '#common';

export function semantifyStringNode(this: StringNode, context: SemanticContext): void {
  const type = newStringTypeSemantic(context.literal.stringDeclaration, this.contentNode?.text ?? newText());

  if (context.scope.isTypeScope) {
    this.semantic = type;
  } else {
    this.semantic = newValueSemantic(type);
  }
}
