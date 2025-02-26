import {newStringTypeSemantic, newStringValueSemantic, SemanticContext, StringNode} from '#analyzer';
import {newText, nothing} from '#common';

export function semantifyStringNode(this: StringNode, context: SemanticContext): void {
  const type = newStringTypeSemantic(nothing, this.contentNode?.text ?? newText());

  if (context.scope.isTypeScope) {
    this.semantic = type;
  } else {
    this.semantic = newStringValueSemantic(type);
  }
}
