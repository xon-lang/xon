import {newStringSemantic, SemanticContext, StringNode} from '#analyzer';
import {newText} from '#core';

export function semantifyStringNode(this: StringNode, context: SemanticContext): void {
  this.semantic = newStringSemantic(
    context.scope.isTypeScope ?? false,
    this.content?.text ?? newText(),
    context.literal.stringDeclaration,
  );
}
