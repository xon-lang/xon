import {newStringSemantic, SemanticContext, StringNode} from '#analyzer';
import {newText} from '#common';

export function semantifyStringNode(this: StringNode, context: SemanticContext): void {
  this.semantic = newStringSemantic(
    context.scope.isTypeScope ?? false,
    this.content?.text ?? newText(),
    context.literal.stringDeclaration,
  );
}
