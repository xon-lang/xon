import {newStringTypeSemantic, SemanticContext, StringNode} from '#analyzer';
import {newText} from '#common';

export function semantifyStringNode(this: StringNode, context: SemanticContext): void {
  const type = newStringTypeSemantic(this.content?.text ?? newText(), context.literal.stringDeclaration);

  if (context.scope.isTypeScope) {
    this.semantic = type;
  } else {
    // this.semantic = newValueSemantic(type);
  }
}
